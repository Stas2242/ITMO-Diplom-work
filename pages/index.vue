<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'


import TopArticle from "~/components/TopArticle.vue";
import AdvantegesArticle from "~/components/AdvantegesArticle.vue";
import ProductsArticle from "~/components/ProductsArticle.vue";
import AboutArticle from "~/components/AboutArticle.vue";
import BottomArticle from "~/components/BottomArticle.vue";

import ModalProduct from "~/components/ModalProduct.vue";

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

// Получение данных

const items = ref([]);
onMounted(async () => {
  try {
    const { data } = await axios.get('https://b255ba40d215731e.mokky.dev/goods')
    // items.value = data;
    
    const randomProducts = []
    for(let i = 0; i < 4; i++){
      let randomProduct = data[Math.floor(Math.random() * data.length)]
      while (randomProducts.includes(randomProduct)) {
        randomProduct = data[Math.floor(Math.random() * data.length)]
      }
      randomProducts.push(randomProduct)
    }
    items.value = randomProducts;
  } catch (err) {
    console.log(err)
  }
})


provide('ModalActions', {
  modalOpen,
  modalClose
})

  definePageMeta({
  layout: false
})
</script>


<template>
  <NuxtLayout name="header-home"/>
  <TopArticle />
  <AdvantegesArticle />
  <ProductsArticle :items="items" @modal-open="modalOpen" />
  <AboutArticle />
  <BottomArticle />

  <ModalProduct v-if="modalOn" @modal-close="modalClose" :productForModal="productForModal" />
  <NuxtLayout name="footer-home"/>




</template>


