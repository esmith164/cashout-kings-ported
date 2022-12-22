<template>
  <div class="component-layout">
    <transition name="fade">
      <Sidebar class="sidebar-wrapper" v-if="ui.sidebarOpen" />
    </transition>
    <div class="dashboard-content">
      <Suspense>
        <Header class="header-override" />
      </Suspense>k      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .sidebar-wrapper {
    @apply min-h-screen;
  }
  @media (min-width: 1330px + 1) {
    .component-layout {
      @apply flex;
    }
    .dashboard-content {
      padding-left: 36px;
      padding-right: 36px;
      padding-bottom: 36px;
      width: calc(100vw - 330px);
      @apply h-screen;
    }

    .dashboard-title {
      padding: 0 0 24px;
    }
  }
  @media (max-width: 1330px) {
    .sidebar-wrapper {
      @apply absolute bg-neutral-0 dark:bg-dark-600;
      z-index: 3000;
    }
    .dashboard-content {
      @apply px-12 pb-12;
      max-height: 100vh;
      overflow-y: auto;
    }
    .header-override {
      @apply -mx-12;
    }
  }
</style>
<script>
import Sidebar from "@/components/ui/Sidebar.vue";
import Header from "@/components/ui/Header.vue";
import { uiStore } from "@/store/ui";

export default {
  components: {
    Sidebar,
    Header,
  },
  setup() {
    const ui = uiStore();
    function toggleSidebar() {
      ui.toggleSidebar();
    }
    return {
      toggleSidebar,
      ui,
    };
  },
};
</script>