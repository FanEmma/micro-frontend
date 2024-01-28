<script setup>
import { onMounted, ref } from 'vue';
import { products, categories } from '../../api';
import useProductsStore from '../../store';

const categoriesList = ref([]);
const category = useProductsStore((state) => state.category);
const setCategory = useProductsStore((state) => state.setCategory);
const setProducts = useProductsStore((state) => state.setProducts);

onMounted(() => {
  categories.getAllCategories().then(res => {
    res.unshift({
      "id": 0,
      "name": "All",
    })
    categoriesList.value = res;
  })
});

const handleCategoryFilter = (CategoryId) => {
  setCategory(CategoryId);
  if (CategoryId !== 0) {
    products.filterByCategoryId(CategoryId).then(res => {
      setProducts(res);
    })
  } else {
    products.getProducts().then(res => {
      setProducts(res);
    })
  }
};
</script>

<template>
  <div
       class="h-auto md:opacity-1 opacity-1 mb-10 h-max  w-full min-w-48 text-xl font-medium border border-gray-800 rounded-xl pb-0 py-5 transition-all">
    <p class="ml-2 flex items-center text-white">
      <svg stroke="currentColor"
           fill="none"
           strokeWidth="2"
           viewBox="0 0 24 24"
           stroke-linecap="round"
           stroke-linejoin="round"
           class="mr-2 text-blue-600"
           height="1em"
           width="1em"
           xmlns="http://www.w3.org/2000/svg">
        <path stroke="none"
              d="M0 0h24v24H0z"
              fill="none"></path>
        <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6"></path>
      </svg>
      Categories
    </p>
    <ul class="text-lg">
      <li class="py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-200 from-gray-800 to-transparent  my-3 border-blue-600 text-white text-base"
          v-for="(item) in categoriesList"
          :class="category === item.id ? 'border-l-2' : null"
          :key="item.id"
          @click="handleCategoryFilter(item.id)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>