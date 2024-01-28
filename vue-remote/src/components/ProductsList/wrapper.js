import { createApp } from 'vue';
import ProductsList from "./index.vue";

export default (el) => {
  createApp(ProductsList).mount(el);
};