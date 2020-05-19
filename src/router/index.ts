import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import {
  AccessWallet,
  CreateWallet,
  Home,
  UseWallet,
} from '../views';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    name: 'CreateWallet',
    component: CreateWallet,
  },
  {
    path: '/access',
    name: 'AccessWallet',
    component: AccessWallet,
  },
  {
    path: '/use',
    name: 'UseWallet',
    component: UseWallet,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
