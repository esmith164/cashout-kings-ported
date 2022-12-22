<template>
  <div class="mt-auto flex gap-x-2">
    <h4 class="text-neutral-0">Test</h4>
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
      <img src="https://via.placeholder.com/820x8" class="w-8 h-8 rounded-lg" />

      <div>
        <h4 class="font-bold dark:text-neutral-0">
          X
        </h4>
        <p class="text-sm text-light-400 -mt-1 dark:text-neutral-400">53920</p>
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
export default {
  setup() {
    function toggleColor() {
    }
    return {
      toggleColor,
    };
  },
};
</script>