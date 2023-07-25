<script setup>
import "@patternfly/pfe-button/dist/pfe-button.min.js";
import "@patternfly/pfe-dropdown/dist/pfe-dropdown.min.js";
import "@patternfly/pfe-icon/dist/pfe-icon.min.js";


</script>

<template>
  <div class="navbar">
    <div class="navbar-img">
      <img
        src="../assets/ecommerce-logo.JPG"
        alt="E-commerce-Image"
        class="navbar-img-logo"
      />
    </div>

    <div class="navbar-username">
      <h4>Hello,</h4>
      <h3>User</h3>
    </div>

    <div class="navbar-searchbox">
      
        <input
          type="text"
          placeholder="Search E-commerce.in"
          class="navbar-searchbox-input"
        />
     
        <pfe-button class="navbar-searchbox-button">
          <button>Search</button>
        </pfe-button>
   
    </div>

    <div class="navbar-dropdown">
        <pfe-dropdown label="Categories" class="pfe-drop">
            <pfe-dropdown-item item-type="link" class="pfe-list">
            <p>Mobiles</p>
            </pfe-dropdown-item>
            <pfe-dropdown-item item-type="link" class="pfe-list">
                <p>Laptops</p>
            </pfe-dropdown-item>
            <pfe-dropdown-item item-type="link" class="pfe-list">
                <p>Appliances</p>
            </pfe-dropdown-item>
            <pfe-dropdown-item item-type="link" class="pfe-list">
                <p>Clothes</p>
            </pfe-dropdown-item>
            <pfe-dropdown-item item-type="link" class="pfe-list">
                <p>Shoes</p>
            </pfe-dropdown-item>
          
          </pfe-dropdown>
    </div>

    <div class="navbar-order">
        <pfe-button>
            <button>My Orders</button>
          </pfe-button>
    </div>

    <div class="navbar-cart">
        
      <pfe-icon icon="rh-shopping-cart" size="4x"></pfe-icon>
          <p>My Cart</p>
    </div>
  </div>
</template>

<style src="./Navbar.css"></style>
