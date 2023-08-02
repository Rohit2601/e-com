import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {      
      cartItems:[],
      cartItemsCount:0,
      cartTotalPrice:0
    };
  },
  actions: {
    addToCart(cartItem) {
    this.cartItemsCount++;  
    this.cartTotalPrice+=cartItem.price;  
    const storedItemIndex = this.cartItems.findIndex((item) => item.uid === cartItem.uid);    
    if(storedItemIndex != -1)    {    
      this.cartItems[storedItemIndex].quantity+=1;
      this.cartItems[storedItemIndex].price+=cartItem.price;      
    }
    else{
      this.cartItems.push(cartItem);  
      } 
    },
  },
});


