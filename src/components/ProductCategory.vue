<script setup>
import LaptopData from '../assets/LaptopData.json';
import "@patternfly/pfe-card";

const image = LaptopData[0].image;
const modelName = LaptopData[0].modelName;
const price = LaptopData[0].price;
</script>

<template>
  <div class="category-box-cards">
    <pfe-card class="category-card" v-for="object in LaptopData">
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

.category-card {

  height:26rem;
  width:30%;
  margin: 1rem 1rem;
  cursor: pointer;
  border-radius: 25px;

}

.category-card-image {
height:15rem;
width:100%;


}
</style>




