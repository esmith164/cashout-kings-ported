<template>
  <div class="mt-auto flex gap-x-2">
    <button
      class="
        w-10
        h-15
        rounded-lg
        border border-light-100
        dark:bg-dark-500 dark:border-dark-400 dark:text-neutral-0
      "
      @click="toggleColor()"
    >
      <i class="fas fa-moon"></i>
    </button>
    <div
      class="
        user-menu
        border border-light-100
        dark:bg-dark-500 dark:border-dark-400
        rounded-2xl
        flex
        px-4
        py-4
        flex-1
        gap-x-4
        items-center
      "
    >
      <img :src="user.user_metadata.avatar_url" class="w-8 h-8 rounded-lg" v-if="user.user_metadata" />
      <img src="https://via.placeholder.com/820x8" class="w-8 h-8 rounded-lg" v-else />

      <div>
        <h4 class="font-bold dark:text-neutral-0">
          {{ user.user_metadata.name }}
        </h4>
        <p class="text-sm text-light-400 -mt-1 dark:text-neutral-400 truncate">
          {{ user.user_metadata.email }}
        </p>
      </div>
      <div class="ml-auto">
        <button class="dark:text-neutral-0">
          <i class="fa fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useAuthStore } from "@/store/auth";

export default {
  async setup() {
    const auth = useAuthStore();
    const user = await auth.fetchUser();
    function toggleColor() {}
    return {
      toggleColor,
      user,
    };
  },
};
</script>