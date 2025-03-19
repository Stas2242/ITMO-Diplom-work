<script setup>
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore();

// Обновление количества товара
const updateQuantity = (item) => {
  cartStore.updateQuantity(item.id, item.quantity);
};

// Удаление товара из корзины
const removeItem = (item) => {
  cartStore.removeItem(item.id);
};

// Вычисление общей суммы
const totalPrice = computed(() => {
  return cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<template>

<div class="cart-container w-full sm:px-3">
    <div v-if="cartStore.items.length === 0" class="empty-cart py-3 text-center underline decoration-solid">
      Your cart is empty
    </div>
    <div v-else>
      <div class="w-full flex px-3 text-[#2A254B] text-xl">
        <div class="w-1/3 text-start">Product</div>
        <div class="w-1/3 text-end">Amount</div>
        <div class="w-1/3 text-end">Price</div>
      </div>
      <div v-for="item in cartStore.items" :key="item.id" class="product flex justify-between p-3 border">
        <div class="product-info w-1/3 flex flex-col sm:flex-row">
          <img class="product-info__pic max-w-24 max-h-40 object-cover" :src="item.imageurl" alt="" />
          <div class="product-info__descriprion text-[#2A254B] sm:pl-3">
            <div class="product-info__descriprion__name text-lg sm:pb-3">
              {{ item.name }}
            </div>
            <div class="product-info__descriprion__price text-lg sm:pb-3">{{ item.price }} $</div>
            <div class="product-info__descriprion__available-amount">Available: {{ item.amount }}</div>
          </div>
        </div>
        <div class="product-amount w-1/3 text-end">
          <input
            type="number"
            v-model="item.quantity"
            min="1"
            :max="item.amount"
            class="w-16 text-center border rounded"
            @change="updateQuantity(item)"
          />
        </div>
        <div class="product-total w-1/3 flex flex-col items-end">
          {{ (item.price * item.quantity).toFixed(2) }} $
        <button @click="removeItem(item)">
          <img src="/public/img/remove.png" alt="delete" class="max-w-10 py-3 active:w-9">
        </button>
        </div>

      </div>
      <div class="total-price text-right font-bold underline decoration-solid mt-4 px-3">
        Total: {{ totalPrice.toFixed(2) }} $
      </div>
    </div>
  </div>
</template>