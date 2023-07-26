import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import ProductDetails from "./components/ProductDetails.vue";
import Cart from "./components/Cart.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: LandingPage,
  },
//   {
//     name: "Category",
//     path: "/category",
//     component: Category,
//   },
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
