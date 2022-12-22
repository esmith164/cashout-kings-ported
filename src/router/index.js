import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import AuthLogin from '../views/AuthLogin.vue'
import { useSupabase } from "@/composables/Supabase";

const baseUrl = import.meta.env.BASE_URL
const history = import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl)

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: AuthLogin,
    },
  ]
})
router.beforeEach(async (to) => {
  const supabase = useSupabase()
  const session = await supabase.auth.getSession()
  const requiresAuth = to.matched.some
    (record => record.meta.requiresAuth);

  if (requiresAuth && !session.data.session) {
    return '/login'
  } else {
    return
  }

});
export default router
