import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/home-tab',
  },
  {
    path: '/home/',
    component: HomePage,
    children: [
      {
        path: '',
        redirect: '/home/home-tab',
      },
      {
        path: 'home-tab',
        component: () => import('@/views/hometabs/HomeTab.vue'),
      },
      {
        path: 'categories-tab',
        component: () => import('@/views/hometabs/CategoryTab.vue'),
      },
      {
        path: 'search-tab',
        component: () => import('@/views/hometabs/SearchTab.vue'),
      },
      {
        path: 'profile-tab',
        component: () => import('@/views/hometabs/ProfileTab.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
