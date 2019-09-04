import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import App from "../../src/App.vue";

const router = new Router({
  routes: [
    { path: '/', component: App },
    { path: '/login',component: Login },
    { path: '/home',component: Home },

  ]
});

export default router;
