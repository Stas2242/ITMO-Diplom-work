import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(item) {
      const existingItem = this.items.find((i) => i.id === item.id);

      if (existingItem) {
        // Проверяем, чтобы общее количество не превышало item.amount
        const newQuantity = existingItem.quantity + item.quantity;
        if (newQuantity > item.amount) {
          existingItem.quantity = item.amount; // Устанавливаем максимальное количество
        } else {
          existingItem.quantity = newQuantity; // Увеличиваем количество
        }
      } else {
        // Если товара нет в корзине, добавляем его
        this.items.push({ ...item });
      }
      console.log("Товар добавлен в корзину:", item);
    },
    updateQuantity(itemId, quantity) {
      const item = this.items.find((i) => i.id === itemId);
      if (item) {
        if (quantity > item.amount) {
          item.quantity = item.amount; // Устанавливаем максимальное количество
        } else {
          item.quantity = quantity; // Обновляем количество
        }
      }
    },
    removeItem(itemId) {
      this.items = this.items.filter((i) => i.id !== itemId);
    },
  },
});