<script setup>
import ProductInModal from "~/components/ProductInModal.vue";

const emit = defineEmits(['modalClose', 'addToCart']);

defineProps({
  productForModal: Array,
})

</script>

<template>
  <div class="modal fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-70">
    <div class="bg-white w-full fixed top-0 left-0 z-60 rounded-lg shadow">
      <div
        class="flex items-end p-4 md:p-5 border-b rounded-t dark:border-gray-600"
      >
        <button
          type="button"
          class="modal-exit text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="large-modal"
          @click="()=> emit('modalClose')"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>

      <div class="modal-body flex justify-around flex-wrap">
      <ProductInModal 
      v-for="item in productForModal"
      :key="item.id"
      :productName="item.name" 
      :imageUrl="item.imageurl" 
      :price="item.price" 
      :isAdded="item.isAdded"
      :onClickAdd="() => emit('addToCart', item)"/>  
      </div>

      <div
        class="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600"
      >
        <button
        @click="onClickAdd"
          data-modal-hide="large-modal"
          type="button"
          class="addBtn text-white bg-[#2A254B] hover:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2A254B] dark:hover:bg-violet-400 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

