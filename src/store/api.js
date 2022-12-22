import { defineStore } from 'pinia'
import axios from 'axios'
export const useApiStore = defineStore('api', {
  actions: {
    async get(path) {
      await axios.get(path)
      .then((res) => {
        console.log(res)
      })
    },
    example() {
      return axios.get('https://dummyjson.com/products')
    }
  }
})