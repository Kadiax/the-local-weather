import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import CityView from '@/views/CityView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { title: 'Dashboard' }
    },
    {
      path: '/weather/:state/:city',
      name: 'cityView',
      component: CityView,
      meta: { title: 'Weather' }
    },
    {
      path: '/',
      name: 'about',
      component: AboutView,
      meta: { title: 'About' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = `${to.params.state ? `${to.params.city}, ${to.params.state}` : to.meta.title} | The Local Weather`;
  next();
});
export default router;
