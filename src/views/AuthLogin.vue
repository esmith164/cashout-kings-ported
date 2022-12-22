<template>
  <div>
        <button @click="login('discord')">Login With Discord</button>

  </div>
</template>
<script>
import { useSSRContext } from "vue";
import { useApiStore } from "@/store/api";
import { useSupabase } from "@/composables/Supabase";
export default {
  setup() {
    const supabase = useSupabase()
    async function login(provider) {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: "http://localhost:3000/dashboard",
        },
      });
    }
    return { login };
  },
  async serverPrefetch() {
  },
};
</script>