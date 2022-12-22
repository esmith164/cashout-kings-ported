import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      authenticated: false,
      id: null,
      profile: null
    }
  },
  actions: {
    update(key, value) {
      console.log(this)
      this[key] = value
      console.log(this[key])
    }
  }
})