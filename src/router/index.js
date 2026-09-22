import { createRouter, createWebHistory } from 'vue-router';
import petsView from '@/views/petsView.vue';
import AddPetsView from '@/views/AddPetsView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/pets',
      name: 'pets',
      component: petsView
    },
    {
      path: '/pets/novo',
      name: 'novo-pet',
      component: AddPetsView
    }
  ],
});

export default router;
