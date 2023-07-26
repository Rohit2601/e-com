<script>
import "@patternfly/pfe-card/dist/pfe-card.min.js";
import "@patternfly/pfe-button/dist/pfe-button.min.js";

export default {
  name: "Cart",
  data() {},
};
</script>

<template>
  <div class="cart-body">
    <div class="pfe-card-body">
      <pfe-card>
        <h2 slot="pfe-card--header">Your items in cart</h2>
        <div>
          <h1>Product Name:</h1>
          <h2>Price:</h2>
        </div>
        <div>
          <h1>edwdas</h1>
        </div>
      </pfe-card>
    </div>
  </div>
</template>

<style scoped>
.pfe-card-body {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 10%;
}
</style>