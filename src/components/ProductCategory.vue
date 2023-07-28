<script setup>
import "@patternfly/pfe-card";
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import router from '../routes.js';

const routerUrl = useRouter();
var productLists = ref([]);
var productName = routerUrl.currentRoute.value.query.product;
const getProductLists = (productName) => {
  fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
      productLists.value = json[productName] ? json[productName] : [];
    })
    .catch((error) => {
      console.log(error);
    })
}
getProductLists(productName);
const productDetailPage = (productName, id) => {
  router.push(`/product-details?product=${productName}&id=${id}`);
}
watch(() => routerUrl.currentRoute.value.query.product, (newProductName) => {
  getProductLists(newProductName);
})

</script>
<template>
  <div class="category-box-cards">
    <h1 v-if="productLists.length == 0">Sorry,no Data to Show !!</h1>
    <pfe-card v-else class="category-card" v-for="(product, index) in productLists"
      @click="productDetailPage(product.modelName, product.id)">
      <img :src="product.image" alt="image" class="category-card-image" />
      <div slot="pfe-card--footer">
        <h3>{{ product.modelName }}</h3>
        <h3>&#8377; {{ product.price }}</h3>
      </div>
    </pfe-card>
  </div>
</template>

<style scoped>
.category-box-cards {
  margin-top: 2rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.category-box-cards>h1 {
  height: 40vh;
}
.category-card {
  height: 26rem;
  width: 22rem;
  margin: 1rem 1rem;
  cursor: pointer;
  border-radius: 25px;
}
.category-card-image {
  height: 15rem;
  width: 100%;
}
</style>




