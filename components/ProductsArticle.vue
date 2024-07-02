<script setup>
import Card from "./Card.vue";

defineProps({
  items: Array
})

const emit = defineEmits(['modalOpen', 'addToCart']);
 


</script>

<template>
  <article class="products-article flex flex-col w-full items-center py-5">
    <div
      class="products-article__random-products flex flex-wrap justify-around"
    >
      <Card 
      v-for="item in items"
      :key="item.id"
      :productName="item.name" 
      :imageUrl="item.imageurl" 
      :price="item.price" 
      :isAdded="item.isAdded"
      :onClickAdd="() => emit('addToCart', item)" 
      :onClickModal="() => emit('modalOpen')"/>

      
    </div>

    <button class="bg-[#F9F9F9] text-[#2A254B] border-2 rounded p-1 max-w-40 cursor-pointer transition hover:-translate-y-1 hover:shadow-xl">
      <div class="all-products-link"><NuxtLink to="/products">View collection</NuxtLink></div>
    </button>
  </article>
</template>


