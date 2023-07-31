import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import LandingPageBody from "./components/LandingPageBody.vue";
import ProductDetails from "./components/ProductDetails.vue";
import ProductCategoryVue from "./components/ProductCategory.vue";
import Cart from "./components/Cart.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: LandingPageBody,
  },
  {
    name: "Products",
    path: "/products",
    component: ProductCategoryVue,
  },
  {
    name: "ProductDetails",
    path: "/product-details",
    component: ProductDetails,
  },
  {
    name: "Cart",
    path: "/cart",
    component: Cart,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
