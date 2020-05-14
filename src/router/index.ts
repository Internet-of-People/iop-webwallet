import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { CreateWallet, Home, Wallet } from '../views';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/wallet/create',
    name: 'CreateWallet',
    component: CreateWallet,
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
