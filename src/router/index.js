import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/register',
    component: RegisterView,
  },
  {
    path: '/tabs/',
    component: HomeView,
    children: [
      {
        path: '',
        redirect: '/',
      },
      {
        path: 'profile',
        component: () => import('@/views/tabs/ProfileView.vue'),
      },
      {
        path: 'collection',
        component: () => import('@/views/tabs/CollectionView.vue'),
      },
      {
        path: 'market-place',
        component: () => import('@/views/tabs/MarketPlaceView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
