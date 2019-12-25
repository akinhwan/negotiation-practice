import Vue from "vue";
import Router from "vue-router";
import App from "../App.vue";
import Main from "../main.vue";
import Landing from "../landing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "App",
    //   component: App
    // },
    {
      path: "/",
      name: "Landing",
      component: Landing
    },
    {
      path: "/room",
      name: "Main",
      component: Main
    }
  ]
});
