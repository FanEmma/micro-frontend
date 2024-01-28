<script setup>
import { onMounted } from 'vue';
import { products } from '../../api';
import PubStore from "zustand-pub";
import { create } from "zustand-vue";
import useProductsStore from '../../store';

const pubStore = new PubStore('key');
const store = pubStore.getStore("useStore");
const usePlatformStore = create(store);
const setAdd = usePlatformStore((state) => state.add);

const productsList = useProductsStore((state) => state.products);
const setProducts = useProductsStore((state) => state.setProducts);

onMounted(() => {
  products.getProducts().then(res => {
    setProducts(res);
  });
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-4 m-auto">
    <div class="md:p-4 lg:p-4 p-3 border border-gray-800 rounded-xl w-full flex flex-col justify-between"
         v-for="item in productsList">
      <a :href="'/products/' + item.id"><img class="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
             :src="item.images[0]"
             alt="">
      </a>
      <div class="flex flex-col justify-between h-full">
        <div>
          <p class="font-semibold text-white text-base mb-2 h-auto">{{ item.title }}</p>
          <span class="label">{{ item.category.name }}</span>
        </div>
        <div class="flex justify-between items-center">
          <div>
            <p class="text-gray-500 text-xs">Price</p>
            <p class="font-semibold text-white text-base">$ {{ item.price }}</p>
          </div>
          <div class="flex text-white justify-between items-center">
            <button class="h-8 px-4 button"
                    @click="setAdd">
              + Add To Cart </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "./style.css";
</style>