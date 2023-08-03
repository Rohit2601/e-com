<script setup>
import "@patternfly/pfe-button";
</script>

<template>
  <div class="landingpage-body">
   

    <div class="landingpage-image">
        <img
          src="../assets/welcome2.jpg"
          alt="Welcome image"
          class="landingpage-image-img"
        />
      </div>

      <div class="landingpage-content">
       <h1>Welcome To Red Hat.</h1>
       <p>Sale starts at 4<sup>th</sup> August only for prime members</p>
       <pfe-button class="landingpage-shop-button">
        <button >Shop Now</button>
      </pfe-button>
       
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
 
   width: 100%;
 
}
.landingpage-image {  
  width: 25%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;  
 
}

.landingpage-image-img {
  width: 100%;
  height: 100%;
}

.landingpage-content{
  width:40%;
  height:100%;
 
 text-align:center;
 padding:2rem 0;
  
}

.landingpage-content > h1{
  font-size:2.7rem;
  font-weight: bold;
  
}

.landingpage-content > p{
  font-size:1.5rem;
}
.landingpage-shop-button{
  --pfe-button--BackgroundColor:#e00;
  --pfe-button--Color:#fff;
  --pfe-button--BorderColor:#020101;
  --pfe-button--BackgroundColor--hover:#e00;
  --pfe-button--BorderRadius:2px;
 
 
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