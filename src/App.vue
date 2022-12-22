
<template>
  <Dashboard v-if="layout == 'dashboard'">
    <RouterView />
  </Dashboard>
  <div v-else>
    <RouterView />
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useSupabase } from "@/composables/Supabase";
import { useAuthStore } from "@/store/auth";
import { RouterView, useRouter } from "vue-router";
import Dashboard from "@/layout/Dashboard.vue";
export default {
  components: {
    Dashboard,
  },
  setup() {
    const session = ref();
    const supabase = useSupabase();
    const auth = useAuthStore();
    const router = useRouter();
    const layout = ref("");
    onMounted(() => {
      /**
       * Layout Logic
       */
      router.beforeEach((to) => {
        layout.value = to.meta.layout;
      });
      /**
       * Handle Session Changes
       */
      supabase.auth.getSession().then(({ data }) => {
        session.value = data.session;
      });
      /**
       *
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
    return { layout };
  },
};
</script>
