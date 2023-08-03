<script setup>
import "@patternfly/pfe-button";
import "@patternfly/pfe-dropdown";
import "@patternfly/pfe-icon";
import "@patternfly/pfe-select";
import "@patternfly/pfe-badge";
import router from '../routes.js';
import { useProductStore } from '../stores/products.js';

// Updated Code for Cart Badge
import { useCartStore } from "../stores/cart.js";
const cartStore = useCartStore();



const productStore = useProductStore();

function checkCategory(category) {
  if (category == '/') {
    router.push('/');
  }
  else {
    router.push(`/products`);
    productStore.populateProductLists(category);
  }
}

const homePage = () => {
  window.location.href = '/';
}
const goToCart = () => {
  router.push(`/cart`);
}
</script>

<template>
  <div class="navbar">
    <div class="navbar-img" @click="homePage">
      <img src="../assets/redhat-sources.jpg" alt="E-commerce-Image" class="navbar-img-logo" /> 
    </div>
    <div class="navbar-separator"></div>
    <div class="navbar-username">      
      <h3>Ecommerce Portal</h3>
    </div>
    <div class="navbar-searchbox">
      <input type="text" placeholder="Search E-commerce.in" class="navbar-searchbox-input" />
      <pfe-button class="navbar-searchbox-button">
        <button>Search</button>
      </pfe-button>
    </div>
    <div class="navbar-select">
      <pfe-select class="pfe-select">
        <select @change="(event) => checkCategory(event.target.value)">
          <option value="/" selected disabled hidden class="pfe-options">Select Category</option>
          <option value="laptops" class="pfe-options">Laptops</option>
          <option value="mobiles" class="pfe-options">Mobiles</option>
          <option value="appliances" class="pfe-options">Appliances</option>
          <option value="clothes" class="pfe-options">Clothes</option>
          <option value="shoes" class="pfe-options">Shoes</option>
        </select>
      </pfe-select>
    </div>
    <div class="navbar-order">
      <pfe-button>
        <button @click="router.push('/my-orders')">My Orders</button>
      </pfe-button>
    </div>
    <div class="navbar-cart" @click="goToCart">
      <pfe-icon icon="rh-shopping-cart" size="4x" class="navbar-cart-icon">
      </pfe-icon>
      <pfe-badge v-if="cartStore.cartItemsCount" state="important" aria-label="cart Items" :number="cartStore.cartItemsCount" class="navbar-cart-badge" threshold="10">
      </pfe-badge>      
    </div>
  </div>
</template>

<style src="./Navbar.css"></style>
