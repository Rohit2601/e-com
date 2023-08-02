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
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height:50vh;
   width: 100%;
 
}
.landingpage-image {  
  width: 30%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;  
}

.landingpage-image-img {
  width: 90%;
  height: 70%;
}

@media screen and (max-width: 940px) {
  .landingpage-body {
    flex-direction: column;
    height:100%;
    width:100%;
    
  }
  .landingpage-image{
    width:100%;
    height:60%;
    margin:1rem 0;
  }
}

</style>
