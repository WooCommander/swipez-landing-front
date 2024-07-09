import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import { HomePage } from '@/pages';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
