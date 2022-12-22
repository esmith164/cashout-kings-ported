
<template>
  <Dashboard v-if="getLayout() == 'dashboard'">
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
    /**
     * Layout and Themeing
     */
    function getLayout() {
      // Determine Layout
      if (router.currentRoute.value.meta.layout == "dashboard") {
        return "dashboard";
      }
      return;
    }
    if (!import.meta.env.SSR) {
      // Client Side Only
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)"); // Determine Light/Dark Sys. Pref
      if (darkThemeMq.matches) { // TODO: Add manual toggle
        document.getElementsByTagName('body')[0].classList.add('dark-mode')

      } else {
        // Theme set to light.
      }
    }
    onMounted(() => {
      /**
       * Layout Logic
       */
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
    return { getLayout };
  },
};
</script>
