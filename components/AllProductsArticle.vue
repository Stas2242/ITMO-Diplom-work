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
      :description="item.description"
      :price="item.price" 
      :isAdded="item.isAdded"
      :onClickAdd="() => emit('addToCart', item)" 
      :onClickModal="() => emit('modalOpen', item)"/>

      
    </div>
  </article>
</template>


