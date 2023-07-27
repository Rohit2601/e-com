<script setup>
import "@patternfly/pfe-card";
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import router from '../routes.js';

const routerUrl = useRouter();
var data = [];
var routeName = routerUrl.currentRoute.value.query.name;
var pageStatus = ref('null');

const categoryData = (category) => {
  if (category == 'laptops') {
    pageStatus.value = 'loading'
    fetch('./LaptopData.json')
      .then((response) => response.json())
      .then((json) => {      
        data = json;
        pageStatus.value = 'fetched';
      })
      .catch((error) => {
        console.log(error);
      })
  }
  else if (category == 'mobiles') {
    pageStatus.value = 'loading'
    fetch('./MobileData.json')
      .then((response) => response.json())
      .then((json) => {      
        data = json;
        pageStatus.value = 'fetched';
      })
      .catch((error) => {
        console.log(error);
      })
  }
  else {
    pageStatus.value = 'null';
    data = [];
  }
};
const productDetailPage = (product,id) => {
  router.push(`/product-details?product=${product}&id=${id}`);

}
categoryData(routeName);
watch(() => router.currentRoute.value.query.name, (newValue) => {
  routeName = newValue;
  categoryData(routeName);
})
</script>

<template>
  <div class="category-box-cards">
    <h1 v-show="pageStatus == 'null'">Sorry,No Data Found !!</h1>
    <h1 v-show="pageStatus == 'loading'">Loading....</h1>
    <pfe-card v-show="pageStatus == 'fetched'" class="category-card" v-for="(object,index) in data" @click="productDetailPage(routeName,object.id)">
      <img :src="object.image" alt="image" class="category-card-image" />
      <div slot="pfe-card--footer">
        <h3>{{ object.modelName }}</h3>
        <h3>&#8377; {{ object.price }}</h3>
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




