import 'reflect-metadata';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Signup from './components/Signup.vue';
import Dashboard from './components/Dashboard.vue';
import isUserAuthGuard from './guards/isUserAuth.guard';
import isUserNotAuthGuard from './guards/isUserNotAuth.guard';

const routes = [
  {
    path: '/',
    component: Signup,
    beforeEnter: isUserAuthGuard.bind(this),
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: isUserNotAuthGuard.bind(this),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
