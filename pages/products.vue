<template>
  <NuxtLayout name="header" />
  <AllProductsArticle :items="items" @modal-open="modalOpen"/>
  <ModalProduct v-if="modalOn" @modal-close="modalClose" @add-to-cart="addToCart" :productForModal="productForModal" />
  <NuxtLayout name="footer" />
</template>

<script setup>
import AllProductsArticle from "~/components/AllProductsArticle.vue";
import ModalProduct from "~/components/ModalProduct.vue";

import { onMounted, ref } from "vue";
import axios from "axios";

const items = ref([]);
onMounted(async () => {
  try {
    const { data } = await axios.get('https://b255ba40d215731e.mokky.dev/goods');
    items.value = data;
  } catch (err) {
    console.log(err);
  }
});

// // модальное окно
let productForModal = ref([])
const modalOn = ref(false)
const modalOpen = (item) => {
  modalOn.value = true
  productForModal.value.push(item) 
}
const modalClose = () => {
  modalOn.value = false
  productForModal.value.shift() 
}

definePageMeta({
  layout: false,
});


provide('ModalActions', {
  modalOpen,
  modalClose
})
</script>
