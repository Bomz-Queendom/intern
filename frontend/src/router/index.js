import { createRouter, createWebHistory } from "vue-router";
import Login from "../view/Login.vue";
import Dashboard from "../view/Dashboard.vue";
import Register from "../view/Register.vue";
import DashboardComponent from "../components/Dashboard.vue";
import CreatePetition from "../components/petition/create.vue";
import store from "../store";
import AuthComponent from "../components/auth/AuthComponent.vue";
import Profile from "../components/villager/Profile.vue";
import View from "../components/petition/view.vue";

const routes = [
  {
    path: "/",
    // rediract: "/dashboard",
    component: DashboardComponent,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/create",
        name: "Create",
        component: CreatePetition,
      },
      {
        path: "/myProfile",
        name: "Proflie",
        component: Profile,
      },
      {
        path: "/view/:id",
        name: "View",
        component: View,
      },
    ],
  },
  {
    path: "/auth",
    rediract: "/login",
    name: "Auth",
    component: AuthComponent,
    meta: { isGuest: true },
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "Dashboard" });
  }
  next();
});

export default router;
