<script setup>
defineProps({
    imageUrl: String,
    productName: String,
    price: Number,
    onClickAdd: Function,
    onClickModal: Function,

})

</script>

<template>   
<section
    id=""
    class="product flex flex-col justify-between bg-[#F9F9F9] w-1/5 min-w-40 p-5 m-2 border border-slate-100 rounded-lg cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img @click="onClickModal" class="product_pic h-3/4 object-cover" :src="imageUrl" />
    <div class="flex flex-col">
      <div class="product_name text-[#2A254B] text-lg">{{ productName }}</div>
      <div class="product_price"> {{ price }} $</div>
      <button
      @click="onClickAdd"
          data-modal-hide="large-modal"
          type="button"
          class="addBtn text-white bg-[#2A254B] hover:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2A254B] dark:hover:bg-violet-400 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
    </div>
  </section>
  
</template>

