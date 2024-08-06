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
    const { data } = await axios.get('/api/get_random_goods')
    items.value = data;
  } catch (err) {
    console.log(err)
  }
})



// // Добавление в корзину

const addToCart = (item) => {
  const cart = []
if (localStorage.getItem("basket")){
  console.log("yes")
} else {
  console.log("no")
}
}

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
  <ProductsArticle :items="items" @modal-open="modalOpen" @add-to-cart="addToCart"/>
  <AboutArticle />
  <BottomArticle />

  <ModalProduct v-if="modalOn" @modal-close="modalClose" @add-to-cart="addToCart" :productForModal="productForModal" />
  <NuxtLayout name="footer-home"/>




</template>


