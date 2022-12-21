<template>
  <div class="my-8">
    <h1>Home</h1>
    <button @click="example()">Test</button>
  </div>
</template>
<script>
import { useRequest } from '../hooks/app'

export default {
  setup() {
    const request = useRequest();
    function example() {
      request("/get");
    }
    return {
      example,
    };
  },
};
</script>
