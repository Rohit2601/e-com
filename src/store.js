import { createStore } from "vuex";

const store = createStore({
  state: {
    cartItems: [], 
  },
  mutations: {
    addToCart(state, item) {
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      console.log(state.cartItems);
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit("addToCart", item);
    },
  },
});

export default store;
