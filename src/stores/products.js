import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => {
    return {
      productLists: [],
      isLoading: false,
      showError: false,
    };
  },
  actions: {
    populateProductLists(category) {
      this.isLoading = true;
      this.showError = false;
      fetch("./data.json")
        .then((response) => response.json())
        .then((json) => {
          this.productLists = json[category] ? json[category] : [];
          this.showError = this.productLists.length == 0 ? true : false;
          this.isLoading = false;
        })
        .catch((error) => {
          this.productLists = [];
          this.showError = true;
          this.isLoading = false;
        });
    },
  },
});
