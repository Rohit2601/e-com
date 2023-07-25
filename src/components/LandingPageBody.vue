<script setup></script>

<template>
  <div class="landingpage-body">
   

    <div class="landingpage-image">
        <img
          src="../assets/welcome2.jpg"
          alt="Welcome image"
          class="landingpage-image-img"
        />
      </div>

      <div class="landingpage-image">
        <img
          src="../assets/welcome.jpg"
          alt="Welcome image"
          class="landingpage-image-img"
        />
      </div>

      <div class="landingpage-image">
        <img
          src="../assets/welcome3.jpg"
          alt="Welcome image"
          class="landingpage-image-img"
        />
      </div>
   
   
  </div>
</template>

<style scoped>
.landingpage-body {
  margin-top: 3rem;
  display: flex;
  height: 60vh;
  width: 100%;
}
.landingpage-image {
  
  width: 50%;
  display:flex;
  justify-content: center;
  align-items: center;
}

.landingpage-image-img {
  width: 90%;
  height: 70%;
}


</style>
