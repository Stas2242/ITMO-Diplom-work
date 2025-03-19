<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  imageUrl: String,
  productName: String,
  description: String,
  price: Number,
  amount: Number,
  onClickAdd: Function,
});

// Локальное состояние для количества товара
const quantity = ref(1);

// Обработчик для уменьшения количества
const decrement = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};

// Обработчик для увеличения количества
const increment = () => {
  if (quantity.value < props.amount) {
    quantity.value += 1;
  }
};

// Обработчик изменения значения вручную
const handleInputChange = (event) => {
  const value = parseInt(event.target.value, 10);
  if (isNaN(value) || value < 1) {
    quantity.value = 1;
  } else if (value > props.amount) {
    quantity.value = props.amount;
  } else {
    quantity.value = value;
  }
};

// Передаем выбранное количество в родительский компонент
const emit = defineEmits(['update-quantity']);
watch(quantity, (newValue) => {
  emit('update-quantity', newValue);
});

</script>

<template>
  <div class="product-info w-11/12 justify-around flex flex-col md:flex-row">
    <img class="product_pic w-3/5 sm:w-2/5 max-w-md object-cover" :src="imageUrl" alt="" />
    <div class="product-info__descriprion text-[#2A254B] pl-3">
      <div class="product-info__descriprion__name text-2xl pb-3">
        {{ productName }}
      </div>
      <div class="product-info__descriprion__price text-lg pb-3">
        {{ price }} $
      </div>
      <h2 class="text-[#2A254B] text-lg pb-3"></h2>
      <div class="product-info__descriprion__text pb-3">
        {{ description }}
      </div>
      <div class="product-info__descriprion__available-amount">Available: {{ amount }} </div>
      <form class="flex max-w-xs">
        <div class="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            @click="decrement"
            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              class="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="number"
            v-model="quantity"
            :min="1"
            :max="amount"
            @input="handleInputChange"
            class="amountInput bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <button
            type="button"
            @click="increment"
            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              class="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
