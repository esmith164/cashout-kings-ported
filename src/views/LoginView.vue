<template>
  <div class="flex">
    <!-- Form Area -->
    <div class="w-6/12 min-h-screen px-10 lg:px-20 flex flex-col">
    <!-- Logo -->
    <img src="@/assets/img/logo.svg" class="mt-10 w-16" />
    <!-- Form Area -->
    <LoginForm />
    </div>
    <div class="w-6/12 bg-primary-400 min-h-screen px-10 lg:pl-20 flex flex-col justify-center">
      <div class="message-wrapper">
        <h2 class="text-dark-700 font-bold text-5xl mb-0">Cashout Kings</h2>
        <h2 class="text-dark-700 font-normal text-3xl lg:text-4xl -mt-3">
          Earn Credit Card Rewards
        </h2>

        <p class="text-dark-700 mb-20">
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue
        </p>
      </div>
      <!-- Testimonials -->
    </div>
  </div>
</template>
<script>
import LoginForm from '@/components/Auth/LoginForm.vue'
export default {
  components: {
    LoginForm
  },
  setup() {
  },
  async serverPrefetch() {
  },
};
</script>