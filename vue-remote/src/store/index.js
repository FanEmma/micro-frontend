import { create } from "zustand-vue";

const useProductsStore = create((set) => ({
  products: [],
  category: 'All',
  setCategory: (val) => set(() => ({ category: val})),
  setProducts: (arr) => set(() => ({ products: arr})),
}));

export default useProductsStore;