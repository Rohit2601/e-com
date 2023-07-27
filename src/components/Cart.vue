<script>
import "@patternfly/pfe-button";
import "@patternfly/pfe-card";
import "@patternfly/pfe-modal";

export default {
  name: "Cart",
  data() {
    return {
      data1: [],
      dataloaded: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("./MobileData.json")
        .then((data) => {
          //  console.log(data);
          return data.json();
        })
        .then((json) => {
          this.data1 = json;
          console.log(json);
        })
        .catch((err) => {
          console.error("  ", err);
        });
    },
  },
};
</script>

<template>
  <div class="cart-main-body">
    <div class="cart-body" v-if="data1.length != 0">
      <pfe-card color="lightest">
        <h2 slot="pfe-card--header">Your items in cart</h2>
        <div class="product-name">
          <h1>{{ data1[1]["modelName"] }}</h1>
          <h2 class="prc">Price: {{ data1[0]["price"] }} Rs</h2>
        </div>

        <div class="b" v-if="data1.length != 0">
          <img
            :src="data1[1].image"
            alt="Image Not Found"
            class="product-img"
          />
          <div class="quantity">
            <h3>Quantity:</h3>
            <pfe-select>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </pfe-select>
          </div>
        </div>
        <div class="total-price-cart">
          <h2>Total Cart price:</h2>
        </div>
      </pfe-card>
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
    </div>
  </div>
</template>

<style scoped>
.cart-body {
  width: 50%;
  /* height: 70vh; */
  margin-left: 25%;
  margin-top: 5%;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
}
.product-name {
  display: flex;
  align-items: center;
  margin-left: 80px;
}
.prc {
  margin-left: 32%;
}
.product-img {
  width: 100%;
  height: 45vh;
}
.b {
  /* background-color: aqua; */
  margin: 10px;
  margin-top: 40px;
  width: 40%;
  height: 45vh;
  /* margin-left: 0px; */
}
.total-price-cart {
  /* background-color: aqua; */
  margin-left: 55%;
}
.quantity {
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkout-button {
  margin-left: 40%;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 20%;
  height: 40px;
  background-color: rgb(239, 235, 235);
  font-size: large;
  cursor: pointer;
  border-radius: 10px;
}
</style>
