<script setup>
import "@patternfly/pfe-button";
import "@patternfly/pfe-dropdown";
import "@patternfly/pfe-icon";
import "@patternfly/pfe-select";


const categoryList = (category) => {
  console.log(category);
}


</script>

<template>
  <div class="navbar">
    <div class="navbar-img">
      <img src="../assets/ecommerce-logo.JPG" alt="E-commerce-Image" class="navbar-img-logo" />
    </div>
    <div class="navbar-username">
      <h4>Hello,</h4>
      <h3>User</h3>
    </div>
    <div class="navbar-searchbox">
      <input type="text" placeholder="Search E-commerce.in" class="navbar-searchbox-input" />
      <pfe-button class="navbar-searchbox-button">
        <button>Search</button>
      </pfe-button>
    </div>
    <div class="navbar-select">
      <pfe-select class="pfe-select">
        <select @change="(event) => { categoryList(event.target.value) }">
          <option value="" class="pfe-options">Categories</option>
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
        <button>My Orders</button>
      </pfe-button>
    </div>
    <div class="navbar-cart">
      <pfe-icon icon="rh-shopping-cart" size="4x" class="navbar-cart-icon"></pfe-icon>
      <p>My Cart</p>
    </div>
  </div>
</template>

<style src="./Navbar.css"></style>
