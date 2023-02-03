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
        path: "/poultry",
        name: "poultry",
        component: () =>
          import(
            /* webpackChunkName: "poultry" */ "../views/client/subfolder/Poultry.vue"
          ),
      },
      {
        path: "/dairy",
        name: "dairy",
        component: () =>
          import(
            /* webpackChunkName: "dairy" */ "../views/client/subfolder/Dairy.vue"
          ),
      },
      {
        path: "/aqua",
        name: "aqua",
        component: () =>
          import(
            /* webpackChunkName: "aqua" */ "../views/client/subfolder/Aqua.vue"
          ),
      },
      {
        path: "nutritional",
        name: "nutritional",
        component: () =>
          import(
            /* webpackChunkName: "nutritional" */ "../views/client/subpage/Nutritional.vue"
          ),
      },
      {
        path: "antibioticpoultry",
        name: "antibioticpoultry",
        component: () =>
          import(
            /* webpackChunkName: "antibioticpoultry" */ "../views/client/subpage/AntibioticPoultry.vue"
          ),
      },
      {
        path: "harbal",
        name: "harbal",
        component: () =>
          import(
            /* webpackChunkName: "harbal" */ "../views/client/subpage/Harbal.vue"
          ),
      },
      {
        path: "probiotics",
        name: "probiotics",
        component: () =>
          import(
            /* webpackChunkName: "probiotics" */ "../views/client/subpage/Probiotics.vue"
          ),
      },
      {
        path: "antibioticsdairy",
        name: "antibioticsdairy",
        component: () =>
          import(
            /* webpackChunkName: "antibioticsdairy" */ "../views/client/subpage/AntibioticsDairy.vue"
          ),
      },
      {
        path: "penathaone",
        name: "penathaone",
        component: () =>
          import(
            /* webpackChunkName: "penathaone" */ "../views/client/subpage/PenathaoneDairy.vue"
          ),
      },
      {
        path: "productdetails/:id",
        name: "productdetails",
        component: () =>
          import(
            /* webpackChunkName: "productdetails" */ "../views/client/ProductDetails.vue"
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
          import(
            /* webpackChunkName: "register" */ "../views/admin/Register.vue"
          ),
      },
      {
        path: "gallery",
        name: "gallery",
        component: () =>
          import(
            /* webpackChunkName: "gallery" */ "../views/admin/Gallery.vue"
          ),
      },
      {
        path: "partners",
        name: "partners",
        component: () =>
          import(
            /* webpackChunkName: "partners" */ "../views/admin/Partners.vue"
          ),
      },
      {
        path: "products",
        name: "products",
        component: () =>
          import(
            /* webpackChunkName: "products" */ "../views/admin/Products.vue"
          ),
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
