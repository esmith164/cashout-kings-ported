import { defineStore } from 'pinia'
import { useSupabase } from "@/composables/Supabase";

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      authenticated: false,
      id: null,
      profile: null
    }
  },
  actions: {
    async fetchUser() {
      const supabase = useSupabase()
      const session = await supabase.auth.getSession()
      return session.data.session.user
    },
    update(key, value) {
      console.log(this)
      this[key] = value
      console.log(this[key])
    }
  }
})