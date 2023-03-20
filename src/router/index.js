import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "webshop_all",
      component: () => import("../views/shop/Allproduct.vue"),
    },
    {
      path: "/shop/boravia",
      name: "webshop_boravia",
      component: () => import("../views/shop/AllproductBoravia.vue"),
    },
    {
      path: "/shop/men",
      name: "webshop_men",
      component: () => import("../views/shop/Men.vue"),
    },
    {
      path: "/shop/women",
      name: "webshop_women",
      component: () => import("../views/shop/Women.vue"),
    },
    {
      path: "/shop/couple",
      name: "webshop_couple",
      component: () => import("../views/shop/Couple.vue"),
    },
    {
      path: "/shop/sets",
      name: "webshop_sets",
      component: () => import("../views/shop/Sets.vue"),
    },
    {
      path: "/shop/sales",
      name: "webshop_sales",
      component: () => import("../views/shop/Saled.vue"),
    },
    {
      path: "/shop/picked",
      name: "webshop_picked",
      component: () => import("../views/shop/pickedView.vue"),
    },
    {
      path: "/shop/checkout",
      name: "webshop_checkout",
      component: () => import("../views/shop/checkout.vue"),
    },
    {
      path: "/shop/checkout/shipping",
      name: "webshop_checkout_shipping",
      component: () => import("../views/shop/checkoutShipping.vue"),
    },
    {
      path: "/shop/checkout/summary",
      name: "webshop_checkout_summary",
      component: () => import("../views/shop/checkoutFinish.vue"),
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
      path: "/shop/thanks",
      name: "webshop_thanks",
      component: () => import("../views/shop/ThankOrder.vue"),
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
    {
      path: "/admin/mail",
      name: "admin_mail",
      component: () => import("../views/admin/Mail.vue"),
    },
    {
      path: "/admin/settings",
      name: "admin_settings",
      component: () => import("../views/admin/Settings.vue"),
    },
    {
      path: "/admin/marketing",
      name: "admin_marketing",
      component: () => import("../views/admin/Marketing.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: HomeView,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
