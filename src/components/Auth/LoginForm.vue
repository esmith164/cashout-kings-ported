<template>
  <div class="my-auto w-7/12 mx-auto">
    <h2 class="text-2xl font-bold -mt-20 mb-2 dark:text-neutral-0">Login</h2>
    <p class="text-xl mb-8 dark:text-neutral-100">Welcome back,</p>
    <ul class="oauth">
      <li class="oauth-google">
        <button @click="login('google')">
          <img src="@/assets/img/google.png" alt="Google Logo" />
          Google
        </button>
      </li>
      <li class="oauth-discord">
        <button @click="login('discord')">
          <i class="fab fa-discord" />
          Discord
        </button>
      </li>
      <li class="oauth-github">
        <button><i class="fab fa-github" />GitHub</button>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .oauth {
    @apply flex flex-col gap-y-2;
    li {
      @apply rounded-2xl duration-150;
      &:hover {
        @apply opacity-75;
      }
      button {
        @apply flex text-center items-center gap-x-2 mx-auto py-3 w-full justify-center font-bold;
        &:focus {
          @apply outline-none;
        }
      }
      &.oauth-google {
        @apply bg-neutral-200;
      }
      &.oauth-discord {
        background-color: #5865f2;
        @apply text-neutral-0;
      }
      &.oauth-github {
        @apply bg-dark-700 text-neutral-0;
      }
    }
  }
</style>
<script>
import { useSupabase } from "@/composables/Supabase";
export default {
  setup() {
    const supabase = useSupabase()
    async function login(provider) {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: "http://localhost:3000/dashboard",
        },
      });
    }
    return { login };
  },
  async serverPrefetch() {
  },
};
</script>