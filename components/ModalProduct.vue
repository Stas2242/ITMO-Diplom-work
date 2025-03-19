<script setup>
import ProductInModal from "~/components/ProductInModal.vue";
import AddBtn from "~/components/AddBtn.vue";
import { ref } from 'vue';

const emit = defineEmits(['modalClose']);

defineProps({
  productForModal: Array,
})

// Локальное состояние для количества товара
const quantity = ref(1);

// Обработчик обновления количества
const updateQuantity = (newQuantity) => {
  quantity.value = newQuantity;
};

</script>

<template>
  <div class="modal fixed top-0 left-0 z-50 w-full h-full flex justify-center sm:items-center  bg-black bg-opacity-70">
      <div class="bg-white w-full sm:w-11/12 md:w-10/12 h-fit sm:rounded-lg shadow"> 
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

      <div class="modal-body flex flex-col justify-center">
      <ProductInModal 
      v-for="item in productForModal"
      :key="item.id"
      :productName="item.name" 
      :imageUrl="item.imageurl" 
      :description="item.description"
      :price="item.price"
      :amount="item.amount" 
      @update-quantity="updateQuantity"
      />  
      </div>

      <div
        class="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600"
      >
      <AddBtn :item="productForModal[0]" :quantity="quantity" />
      </div>
    </div>
  </div>
</template>

