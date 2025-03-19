<script setup>
import AddBtn from '~/components/AddBtn.vue';

defineProps({
    imageUrl: String,
    productName: String,
    price: Number,
    onClickAdd: Function,
    onClickModal: Function,
    item: Object,
    quantity: Number,
})

</script>

<template>   
<section
    class="product flex flex-col justify-between bg-[#F9F9F9] w-1/5 min-w-40 p-5 m-2 border border-slate-100 rounded-lg cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img @click="onClickModal" class="product_pic h-3/4 object-cover" :src="imageUrl" />
    <div class="flex flex-col">
      <div class="product_name text-[#2A254B] text-lg">{{ productName }}</div>
      <div class="product_price"> {{ price }} $</div>
      <AddBtn :item="item" :quantity="quantity" @add-to-cart="onClickAdd" />
    </div>
  </section>
  
</template>

