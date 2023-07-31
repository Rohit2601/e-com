<script setup>
import "@patternfly/pfe-button";
import "@patternfly/pfe-card";
import "@patternfly/pfe-modal";
import { useRouter } from "vue-router";
import { ref, inject, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedQuantity = ref(1);
const cartItems = inject("store.cartItems", []);
console.log(store.state.cartItems);

function calculateTotalPrice() {
  return store.state.cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
}

function calculatePrice(price, quantity) {
  return price * parseInt(quantity);
}

watch(cartItems, (newVal) => {
  console.log("Updated cart items:", newVal);
});
</script>

<template>
  <div class="main-cart-body">
    <div class="card-body" v-for="item in store.state.cartItems" :key="item">
      <pfe-card color="lightest">
        <h2 slot="pfe-card--header">Your items in cart</h2>
        <div class="product-name">
          <h1>{{ item.product.modelName }}</h1>
          <img
            :src="item.product.image"
            alt="Image Not Found"
            class="product-img"
          />
        </div>
        <div class="cart-price-main">
          <div class="cart-price">
            <h2>
              Price:
              {{ calculatePrice(item.product.price, selectedQuantity) }} Rs
            </h2>
          </div>
          <div class="quantity">
            <h4>Quantity:</h4>
            <pfe-select>
              <select v-model="selectedQuantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </pfe-select>
          </div>
        </div>
      </pfe-card>
    </div>
    <div class="address-body">
      <pfe-card>
        <div class="address">
          <h2>Enter your address here</h2>
          <form class="form" action="fillform">
            <input size="30" type="text" placeholder="House No:" />
            <input size="30" type="text" placeholder="lane/area" />
            <input size="30" type="text" placeholder="City" />
            <input size="30" type="text" placeholder="State" />
            <input size="30" type="number" placeholder="Mobile Number" />
          </form>
          <pfe-button class="delivery-btn"
            ><button>Deliver to This Address</button></pfe-button
          >
        </div>
        <div class="total-cart-price">
          <h2>Total cart price : {{ calculateTotalPrice() }} rs</h2>
        </div>

        <div>
          <pfe-modal>
            <button slot="pfe-modal--trigger" class="checkout-button">
              Proceed to Checkout
            </button>
            <h2 slot="pfe-modal--header">
              Congratulations..! Your Order Has Been Placed
            </h2>
            <a href="http://localhost:5173/"> Go to Home </a>
          </pfe-modal>
        </div>
      </pfe-card>
    </div>
  </div>
</template>

<style scoped>
.main-cart-body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin-left: 15%;
}
.card-body {
  width: 60%;
  margin-top: 2%;
  height: 3-vh;
  margin-left: 20%;
  background-color: aqua;
  border: 2px solid black;
  border-radius: 10px;
  font-family: "Red Hat Display", "RedHatDisplay", "Overpass",
    "Arial,sans-serif";
}
.address-body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-top: 5%;
  margin-left: 30%;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
}
.product-name {
  margin-left: 4px;
  width: 55%;
}
.address {
  display: block;
  align-items: center;
  justify-content: center;
  width: 55%;
  margin-left: 25%;
}
.form > input {
  margin: 10px;
}
.cart-price {
  margin-left: 1px;
  color: red;
  /* background-color: aqua; */
}
.product-img {
  width: 50%;
  height: 17vh;
  margin-left: 125%;
}
.quantity {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 35%;
  height: 3.8vh;
  /* background-color: aqua; */
}
.checkout-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 33%;
  margin-top: 13%;
  width: 40%;
  height: 50px;
  font-size: large;
  cursor: pointer;
  border-radius: 10px;
}
.cart-price-main {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
}
.delivery-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
}
.total-cart-price {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  color: black;
}
</style>
