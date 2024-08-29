// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView";
import AboutView from "@/views/HomeView";
import AuthentificationView from '../views/AuthentificationView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }, // Zugang nur nach Authentifizierung
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }, // Zugang nur nach Authentifizierung
  },
  {
    path: '/login',
    name: 'Login',
    component: AuthentificationView, // Login-Komponente
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Globale Route Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Überprüft, ob ein Authentifizierungs-Token vorhanden ist
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Wenn nicht authentifiziert, zur Login-Seite weiterleiten
  } else {
    next(); // Ansonsten normal weiter
  }
});

export default router;
