
<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <RouterView />
</template>
<script>
import { onMounted, ref } from "vue";
import { useSupabase } from "@/composables/Supabase";
import { useAuthStore } from "@/store/auth";
import { RouterView, useRouter } from "vue-router";
export default {
  setup() {
    const session = ref();
    const supabase = useSupabase();
    const auth = useAuthStore();
    const router = useRouter();
    onMounted(() => {
      /**
       * UPDATE SESSION VALUE
       */
      supabase.auth.getSession().then(({ data }) => {
        session.value = data.session;
      });
      /**
       * UPDATE STATE
       */
      supabase.auth.onAuthStateChange((_, _session) => {
        session.value = _session;
        const user = session.value.user;
        if (user.aud == "authenticated") {
          auth.update("id", user.user_metadata.provider_id); // Set Discord ID
          auth.update("authenticated", true); // Set Authenticated Status
        } else {
          router.push("/login");
        }
      });
    });
  },
};
</script>
