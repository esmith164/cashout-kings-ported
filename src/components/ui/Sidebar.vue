<template>
  <div class="sidebar border-r-2 border-light-100 dark:border-dark-400 flex flex-col">
    <div class="brand flex gap-x-3 mb-16 items-center">
      <img src="@/assets/img/logo.svg" class="w-10" />
      <h2 class="font-bold text-lg dark:text-neutral-0">Cashout Kings</h2>
      <button class="menu-toggle" @click="toggleSidebar()">
        <i class="far fa-times"/>
      </button>
    </div>
    <h4 class="text-lg mb-6 font-medium dark:text-neutral-0">Menu</h4>
    <button class="btn-primary w-full mb-12" @click="toggleCreate()">
      <i class="fa fa-plus mr-2"></i>
      Create Shipment
    </button>
    <!-- Sidebar Menu -->
    <ul class="navbar-nav">
      <li>
        <router-link to="/dashboard"
          ><i class="fa fa-home"></i>Dashboard</router-link
        >
      </li>
      <li>
        <router-link to="/dashboard/shipments"
          ><i class="fa fa-box"></i>Current Shipments</router-link
        >
      </li>
      <li>
        <router-link to="/dashboard/deals"
          ><i class="fa fa-dollar"></i>Current Deals</router-link
        >
      </li>
      <li>
        <router-link to="/dashboard/account"
          ><i class="fa fa-user"></i>User Information</router-link
        >
      </li>
    </ul>
    <UserMenu />
    <CreateShipment v-if="ui.activeModal === 'create-shipment'" />
  </div>
</template>
<style lang="scss" scoped>
  .sidebar {
    flex: 0 0 330px;
    padding: 36px;
    .navbar-nav {
      @apply flex flex-col gap-y-8;
      li {
        color: #555555;
        a {
          @apply text-base py-3 px-4 font-medium rounded-lg border border-neutral-0 duration-200;
          &:hover,
          &.router-link-exact-active,
          &.router-link-exact-active {
            @apply border-neutral-400 border text-dark-300;
          }
        }

        svg {
          width: 18px;
          @apply mr-3;
        }
      }
    }
  }
  .dark-mode {
    .sidebar {
      li {
        @apply text-neutral-0;
        a {
          @apply border-dark-500;
          &:hover,
          &.router-link-exact-active,
          &.router-link-exact-active {
            @apply border-dark-400  text-neutral-0 bg-dark-500;
          }
        }
      }
    }
  }
  .menu-toggle {
    @apply hidden;
  }
  @media (max-width: 1330px) {
    .sidebar {
      flex: 0 0 300px;
      @apply shadow-lg
    }
    .menu-toggle {
      @apply block dark:text-neutral-0 text-xl ml-auto;
    }
  }
</style>
<script>
import UserMenu from "./UserMenu.vue";
//import CreateShipment from "@/components/Modals/CreateShipment";
import { uiStore } from "@/store/ui";
export default {
  components: {
    UserMenu,
  //  CreateShipment,
  },
  setup() {
    const ui = uiStore();
    function toggleCreate() {
      ui.toggleModal("create-shipment");
    }
    function toggleSidebar() {
      ui.toggleSidebar()
    }
    return {
      ui,
      toggleCreate,
      toggleSidebar
    };
  },
};
</script>