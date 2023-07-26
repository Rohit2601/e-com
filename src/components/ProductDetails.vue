<script>
import "@patternfly/pfe-button";
import "@patternfly/pfe-card";
import "@patternfly/pfe-select";
import "@patternfly/pfe-icon";
import MobileData from "../assets/MobileData.json";

export default {
  name: "ProductDetails",
  data() {
    return {
      MobileData: MobileData,
    };
  },
};
</script>
<template>
  <div class="product-detail-body">
    <pfe-card class="product-box">
      <div>
        <img
          src="../assets/ip133.jpeg"
          alt="Image not found..!"
          class="product-img"
        />
      </div>
    </pfe-card>
    <pfe-card class="product-box1">
      <div>
        <div class="product-title">
          <h1>Iphone 14</h1>
        </div>
        <div class="product-price">
          <h2>Price : 65000/- Rs (Including Discount)</h2>
        </div>

        <div class="list-data">
          <h4>Specifications :</h4>
          <ul>
            <li>15 cm (6.1-inch) Super Retina XDR display</li>
            <li>
              Cinematic mode adds shallow depth of field and shifts focus
              automatically in your videos
            </li>
            <li>
              Advanced dual-camera system with 12MP Wide and Ultra Wide cameras;
              Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR
              recording
            </li>
            <li>
              12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
              recording
            </li>
            <li>
              12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
              recording
            </li>
            <li>
              12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
              recording
            </li>
            <li>
              12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
              recording
            </li>
          </ul>
        </div>
        <div class="add-to-cart">
          <div class="variant"><h3>Storage :</h3></div>
          <div>
            <pfe-select class="storage-select">
              <select>
                <!-- <option>Please select the storage</option> -->
                <option value="64">64 GB</option>
                <option value="128">128 GB</option>
                <option value="256">256 GB</option>
              </select>
            </pfe-select>
          </div>
          <pfe-button class="add-t-cart-button">
            <button>Add to Cart</button>
          </pfe-button>
          <pfe-icon icon="rh-shopping-cart" size="4x"> </pfe-icon>
        </div>
      </div>
    </pfe-card>
  </div>
</template>

<style scoped>
.product-box {
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  height: 70vh;
  margin-top: 7%;
  margin-left: 320px;
  box-sizing: border-box;
  float: left;
  background-color: white;
}
.product-box1 {
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 2px;
  width: 30%;
  height: 70vh;
  margin-top: 7%;
  margin-left: 100px;
  box-sizing: border-box;
  float: left;
  background-color: white;
}
.product-img {
  width: 100%;
  height: 65vh;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-box1 > h1 {
  color: black;
  background-color: antiquewhite;
}
.product-title {
  background-color: rgb(125, 181, 237);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  width: 100%;
  height: 70px;
}
.product-price {
  background-color: rgb(125, 181, 237);
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 50px;
}
.product-price > h2 {
  margin-left: 14%;
  color: brown;
}
.add-to-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  cursor: pointer;
  background-color: rgb(125, 181, 237);
}
.list-data {
  font-size: larger;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 390px;
  overflow-y: scroll;
}
.cart-img {
  widows: 100px;
  height: 50px;
}

.storage-select {
  width: 100px;
  height: auto;
  margin-right: 50px;
}
.variant {
  width: 80px;
  height: 50px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-t-cart-button {
  box-shadow: 2px 2px 3px black;
}
</style>
