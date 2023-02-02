import Vue from "vue";
import VueRouter from "vue-router";
import Client from "../views/client/Client.vue";
import Dashboard from "../views/admin/Dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "client",
    component: Client,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/client/Home.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/client/About.vue"),
      },
      {
        path: "gallery",
        name: "gallery",
        component: () =>
          import(
            /* webpackChunkName: "gallery" */ "../views/client/Gallery.vue"
          ),
      },
      {
        path: "products",
        name: "product",
        component: () =>
          import(
            /* webpackChunkName: "product" */ "../views/client/Product.vue"
          ),
      },
      {
        path: "contactus",
        name: "contact",
        component: () =>
          import(
            /* webpackChunkName: "contact" */ "../views/client/Contact.vue"
          ),
      },
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/client/Login.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    redirect: "/dashboard/register",
    // meta: { authOnly: true },
    children: [
      {
        path: "register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "register" */ "../views/admin/Register.vue"),
      },
      {
        path: "gallery",
        name: "gallery",
        component: () =>
          import(/* webpackChunkName: "gallery" */ "../views/admin/Gallery.vue"),
      },
      {
        path: "partners",
        name: "partners",
        component: () =>
          import(/* webpackChunkName: "partners" */ "../views/admin/Partners.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () =>
          import(/* webpackChunkName: "products" */ "../views/admin/Products.vue"),
      },
      {
        path: "slider",
        name: "slider",
        component: () =>
          import(/* webpackChunkName: "slider" */ "../views/admin/Slider.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
