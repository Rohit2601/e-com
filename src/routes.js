import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import LandingPageBody from "./components/LandingPageBody.vue";
import ProductDetails from "./components/ProductDetails.vue";
import ProductCategoryVue from "./components/ProductCategory.vue";
import Cart from "./components/Cart.vue";
import Order from "./components/Order.vue";

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
  {
    name:"Order",
    path:"/my-orders",
    component:Order
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
