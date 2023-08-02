<script setup>
</script>

<template>

<div class="footer">
    <div>
        <img src="../assets/redhat-footer.png" alt="redhat-logo" class="footer-redhat-image"/>
    </div>
<div class="footer-1">
<h2>Get to know us</h2>
<h4>About us</h4>
<h4>Careers</h4>
<h4>E-commerce science</h4>
</div>
<div class="footer-1">
    <h2>Connect with us</h2>
    <h4>Facebook</h4>
<h4>Instagram</h4>
<h4>Twitter</h4>
</div>
<div class="footer-1">
    <h2>Let us Help you</h2>
    <h4>Your Account</h4>
<h4>Returns Centre</h4>
<h4>E-commerce App Download</h4>
<h4>Help</h4>

</div>
</div>
</template>


<style scoped>
.footer{
    width:100%;
    margin-top:4rem;
    background-color: rgb(0, 0, 0);
    display:flex;
    justify-content: center;   
    padding:2rem;
    color:white;
    
}
.footer-redhat-image{
    height:5rem;
    width:80%;
}
.footer-1{
    margin:0 2rem;
    font-weight: bold;
    
}

.footer-1 > h2{
    margin-bottom: 1rem;
   
}

.footer-1 > h4{
    padding:8px 0;
}

@media screen and (max-width: 940px) {
    .footer{
        flex-direction: column;
        justify-content: center;
       
    }
  }

</style>