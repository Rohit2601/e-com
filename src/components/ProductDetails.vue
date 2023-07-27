<script>
import "@patternfly/pfe-button";
import "@patternfly/pfe-card";
import "@patternfly/pfe-select";
import "@patternfly/pfe-icon";
// import MobileData from "./MobileData.json";
// console.log(MobileData);

export default {
  name: "ProductDetails",
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
  <div>
    <div class="product-detail-cards">
      <pfe-card class="product-box">
        <div>
          <img
            src="https://i0.wp.com/abizot.com.ng/wp-content/uploads/2022/09/Apple-iPhone-14-%E2%80%93-Dual-128GBgd.png?fit=857%2C1200&ssl=1"
            alt="Image not found..!"
            class="product-img"
          />
        </div>
        <div class="cart-body">
          <div class="variant">
            <h4>Storage :</h4>
            <pfe-select>
              <select>
                <!-- <option>Please select the storage</option> -->
                <option value="64">64 GB</option>
                <option value="128">128 GB</option>
                <option value="256">256 GB</option>
              </select>
            </pfe-select>
          </div>
          <div class="add-to-cart-button">
            <pfe-button>
              <button>Add to Cart</button>
            </pfe-button>
          </div>
        </div>
      </pfe-card>
      <pfe-card class="product-box1">
        <div>
          <div class="product-title">
            <h1>
              <p>{{ data1[2]}}</p>
            </h1>
          </div>
          <div class="product-price">
            <h2>Price: /- ( Including taxes )</h2>
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
                Advanced dual-camera system with 12MP Wide and Ultra Wide
                cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby
                Vision HDR recording
              </li>
              <li>
                12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
                recording
              </li>
            </ul>
          </div>
        </div>
      </pfe-card>
    </div>
  </div>
</template>

<style scoped>
.product-detail-cards {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.product-box {
  /* border: 2px solid #ddd; */
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  /* height: 70vh; */
  margin-top: 3%;
  margin-left: 4%;
  /* box-sizing: border-box; */
  background-color: white;
}
.product-box1 {
  padding: 2px;
  width: 30%;
  margin-top: 5%;
  margin-left: 100px;
  /* box-sizing: border-box; */
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
  /* background-color: rgb(125, 181, 237); */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
  width: 100%;
  height: 70px;
}
.product-price {
  /* background-color: rgb(125, 181, 237); */
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 8%;
  width: 100%;
  height: 50px;
}
.product-price > h2 {
  margin-left: 14%;
  color: brown;
}
.variant {
  cursor: pointer;
}

.list-data {
  font-size: larger;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.cart-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* background-color: aqua; */
}
.add-to-cart-button {
  /* margin-top: 250%; */
  box-shadow: 1px 2px 3px black;
  margin-top: 58px;
  margin-left: 80px;
}
</style>
