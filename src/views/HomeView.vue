<script>
import { useSSRContext } from "vue";
import { useApiStore } from "@/store/api";
import { useSupabase } from "@/composables/Supabase";
export default {
  setup() {
    const api = useApiStore();
    const supabase = useSupabase()
    async function login(provider) {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: "http://localhost:3000/dashboard",
        },
      });
    }
    return { api, login };
  },
  async serverPrefetch() {
    const api = useApiStore();
    api.example().then((res) => {
     // console.log(res.data);
    });
    console.log("Test! From Server!");
  },
};
</script>

<template>
  <main>
    <button @click="login('discord')">Login With Discord</button>
    <button @click="api.example()">Test!</button>
  </main>
</template>
