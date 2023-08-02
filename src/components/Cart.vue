<script setup>
import "@patternfly/pfe-button";
import "@patternfly/pfe-card";
import "@patternfly/pfe-modal";
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
  <div v-if="store.state.cartItems.length == 0" class="empty-cart-heading">
    <h1>No Items Added in Cart..!</h1>
    <h3>
      <a href="http://localhost:5173/"> Click here to Continue Shopping </a>
    </h3>
  </div>
  <div v-else class="main-cart-body">
    <pfe-card class="header-card" color="lightest"
      ><h1 slot="pfe-card--header">Your items in cart</h1>
    </pfe-card>

    <div class="card-body" v-for="item in store.state.cartItems" :key="item.id">
      <pfe-card color="lightest">
        <div class="product-name">
          <h1>{{ item.product.modelName }}</h1>
        </div>
        <div class="img-container">
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
              {{ calculatePrice(item.product.price, item.quantity) }} Rs
            </h2>
          </div>
          <div class="quantity">
            <h4>Quantity:</h4>
            <pfe-select v-model="selectedQuantity">
              <select>
                <option value="itemQuan">{{ item.quantity }}</option>
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
      <pfe-card color="lightest">
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
            <a href="http://localhost:5173/"> Continue Shopping..! </a>
          </pfe-modal>
        </div>
      </pfe-card>
    </div>
  </div>
</template>

<style scoped>
.empty-cart-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 30%;
}
/* .img-container{
  background-color: aqua;
  width: 90%;
  margin-left: %;
} */
.main-cart-body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin-left: 15%;
  background-color: white;
}
.header-card {
  background-color: white;
  width: 100%;
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-body {
  width: 60%;
  height: 20%;
  margin-left: 20%;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 1px;
  font-family: "Red Hat Display", "RedHatDisplay", "Overpass",
    "Arial,sans-serif";
}
.address-body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 5%;
  margin-left: 25%;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
}
.product-name {
  margin-left: 5%;
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
}
.product-img {
  width: 35%;
  margin-left: 60%;
}
.quantity {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 35%;
  height: 3.8vh;
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
