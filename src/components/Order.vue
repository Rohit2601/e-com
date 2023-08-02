<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
const getDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
    return `${month} ${day},${year}`;
};
</script>
<template>
    <pfe-card class="order-container" color="lightest" border>
        <div slot="pfe-card--header" color="#ffffff" class="order-container-header">
            <div class="order-header-date">
                <p class="order-title">Order Placed</p>
                <p class="order-content">
                    {{ cartStore.cartItemsCount != 0 ? getDate() : "-" }}
                </p>
            </div>
            <div class="order-header-quantity">
                <p class="order-title">Total Quantity</p>
                <p class="order-content">
                    {{ cartStore.cartItemsCount != 0 ? cartStore.cartItemsCount : "-" }}
                </p>
            </div>
            <div class="order-header-shipment">
                <p class="order-title">Ship To</p>
                <p class="order-content">
                    {{
                        cartStore.cartItemsCount != 0 ? " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatessimilique eveniet doloremque fugitlaudantium.Consectetur odit ab provide" : " - "
                    }}
                </p>
            </div>
            <div class="order-header-price">
                <p class="order-title">Total Price</p>
                <p class="order-content">
                    &#8377;
                    {{ cartStore.cartItemsCount != 0 ? cartStore.cartTotalPrice : "" }}/-
                </p>
            </div>
        </div>
        <div v-if="!cartStore.cartItemsCount" class="order-error-message">
            <h3>No Order Placed !!!</h3>
        </div>
        <div v-else class="pfe-l-grid pfe-m-gutters pfe-m-all-3-col">
            <div v-for="(item, index) in cartStore.cartItems" class="order-container-products">
                <img :src="item.image" alt="cart image" class="order-container-product-image" />
                <div>
                    <h3 class="order-container-product-content">{{ item.modelName }}</h3>
                    <h3 class="order-container-product-content">
                        Quantity: {{ item.quantity }}
                    </h3>
                    <h3 class="order-container-product-content">
                        &#8377; {{ item.price }} /-
                    </h3>
                </div>
            </div>
        </div>
    </pfe-card>
</template>
<style scoped>
.order-container {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
}

.order-container-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.order-header-date {
    width: 12%;
    text-align: left;
}

.order-header-quantity {
    width: 12%;
    text-align: left;
}

.order-header-shipment {
    width: 50%;
    text-align: left;
}

.order-header-price {
    width: 15%;
    text-align: right;
}

.order-title {
    height: 2rem;
    font-weight: bold;
    font-size: 1.1rem;
}

.order-content {
    font-size: 1rem;
}

.order-error-message {
    width: 100%;
    margin: auto;
    text-align: center;
}

.order-container-products {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.2rem 0.5rem;
}

.order-container-product-image {
    height: 6rem;
    width: 6rem;
    margin-right: 1.3rem;
}

.order-container-product-content {
    font-size: 0.8rem;
}
</style>
