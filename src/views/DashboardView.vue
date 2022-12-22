<template>
  <div>
    This is blocked!
    <button @click="logout">Logout!</button>
  </div>
</template>
<script>
import { useSupabase } from "@/composables/Supabase";
export default {
  setup() {
    const supabase = useSupabase()

    function logout() {
      supabase.auth.signOut()
    }
    return {
      logout
    }
  }
}
</script>