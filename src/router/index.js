import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
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
