import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "webshop",
      component: () => import("../views/shop/allproductView.vue"),
    },
    {
      path: "/shop/picked",
      name: "webshop_picked",
      component: () => import("../views/shop/pickedView.vue"),
    },
    {
      path: "/adatkezelesi-tajekoztato",
      name: "adatkezelesi_tajekoztato",
      component: () => import("../views/PPView.vue"),
    },
    {
      path: "/aszf",
      name: "aszf",
      component: () => import("../views/ASZFView.vue"),
    },
    {
      path: "/kapcsolat",
      name: "kapcsolat",
      component: () => import("../views/ContactUsView.vue"),
    },
    {
      path: "/karkoto-meret",
      name: "karkoto_meret",
      component: () => import("../views/SizeGuideView.vue"),
    },
    {
      path: "/gyik",
      name: "gyik",
      component: () => import("../views/GYIKView.vue"),
    },
    {
      path: "/sutik",
      name: "sutik",
      component: () => import("../views/CookieView.vue"),
    },
    {
      path: "/rolunk",
      name: "rolunk",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/asvany-katalogus",
      name: "asvany_katalogus",
      component: () => import("../views/CatalogView.vue"),
    },

    //Admin oldalért felelős Routerek
    {
      path: "/admin",
      name: "admin_index",
      component: () => import("../views/admin/Index.vue"),
    },
    {
      path: "/admin/dashboard",
      name: "admin_dashboard",
      component: () => import("../views/admin/Dashboard.vue"),
    },
    {
      path: "/admin/products",
      name: "admin_products",
      component: () => import("../views/admin/Products.vue"),
    },
    {
      path: "/admin/collections",
      name: "admin_collections",
      component: () => import("../views/admin/Collections.vue"),
    },
    {
      path: "/admin/sales",
      name: "admin_sales",
      component: () => import("../views/admin/Sales.vue"),
    },
    {
      path: "/admin/orders",
      name: "admin_orders",
      component: () => import("../views/admin/Orders.vue"),
    },
    {
      path: "/admin/inventory",
      name: "admin_inventory",
      component: () => import("../views/admin/Inventory.vue"),
    },
  ],
});

export default router;
