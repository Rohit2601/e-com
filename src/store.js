import { createStore } from "vuex";

const store = createStore({
  state: {
    cartItems: [], 
  },
  mutations: {
    addToCart(state, item) {
      state.cartItems.push(item);
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
