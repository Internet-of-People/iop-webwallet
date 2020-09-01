import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import {
  AccessWallet,
  CreateWallet,
  Dashboard,
  Home,
  Send,
  ViewAddress,
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/send/:addressIndex',
    name: 'Send',
    component: Send,
    props: (route: Route): any => ({
      addressIndex: Number(route.params.addressIndex),
    }),
  },
  {
    path: '/view/:addressIndex',
    name: 'ViewAddress',
    component: ViewAddress,
    props: (route: Route): any => ({
      addressIndex: Number(route.params.addressIndex),
    }),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
