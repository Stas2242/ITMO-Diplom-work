<script setup>
import { useCartStore } from '~/stores/cart';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartStore = useCartStore();

const addToCart = () => {
  if(props.quantity == undefined){
    cartStore.addItem({ ...props.item, quantity: 1 });
  } else {
    cartStore.addItem({ ...props.item, quantity: props.quantity });
  }

};
</script>

<template>
    <button
        @click="addToCart"
          type="button"
          class="addBtn text-white bg-[#2A254B] hover:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2A254B] dark:hover:bg-violet-400 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
</template>