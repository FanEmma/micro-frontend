<script setup>
import ProductsList from './components/ProductsList';
import FilterNavigation from './components/FilterNavigation';
</script>
<template>
  <div class="mt-10 mx-auto">
    <div class="max-w-screen-xl mx-auto md:px-6 flex items-start px-10 py-5 gap-5">
      <ProductsList :class="'lg:w-10/12'" />
      <FilterNavigation :class="'lg:w-2/12'" />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>