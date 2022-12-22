<template>
  <div class="header-component">
    <button class="menu-toggle" @click="ui.toggleSidebar()" :class="{'force-open' : ui.sidebarOpen == false }">
      <i class="fa fa-bars" />
    </button>
    <h4 class="font-medium select-none dark:text-neutral-0">{{ ui.title }}</h4>
    <div class="hidden lg:flex payout ml-auto gap-x-8">
      <button class="font-medium dark:text-neutral-0">
        Request Payout
      </button>
      <span class="bg-success-350 text-success-400 font-bold text-sm py-1 px-2 rounded-lg">
        $25.636.32
      </span>
    </div>
    <button class="font-medium flex items-center dark:text-neutral-0">
     {{ user.user_metadata.email}}
      <i class="fa fa-arrow-right ml-4"></i>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.header-component {
  @apply flex border-b-2 border-light-100 dark:border-dark-400 dark:bg-dark-500 gap-x-12 items-center;
  margin: 0 -36px;
  padding: 20px 36px;
  margin-bottom: 36px;
}
.menu-toggle {
  @apply hidden text-xl text-neutral-0;
}
@media (max-width: 1330px) {
  .menu-toggle {
    @apply block;
  }
}
.force-open {
  @apply block;
}
</style>
<script>
import { uiStore } from '@/store/ui'
import { useAuthStore } from '@/store/auth'
export default {
  async setup() {
    const ui = uiStore()
    const auth = useAuthStore()
    const user = await auth.fetchUser()
    return {
      ui,
      auth,
      user
    }
  }
}
</script>