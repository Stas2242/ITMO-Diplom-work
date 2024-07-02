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
const modalOn = ref(false)
const modalOpen = () => {
  modalOn.value = true
}
const modalClose = () => {
  modalOn.value = false
}

// Получение данных

const items = ref([]);
onMounted(async () => {
  try {
    const { data } = await axios.get('/api/get_goods')
    items.value = data;
  } catch (err) {
    console.log(err)
  }
})



// // Добавление в корзину
const cart = ref([])

const addToCart = (item) => {
  //   if (!item/isAdded) {
  //   cart.value.push(item)
  //   item.isAdded = true
  // } else {
  //   cart.value.splice(cart.value.indexOf(item), 1)
  //   item.isAdded = false
  // }
  console.log(item)

}

provide('ModalActions', {
  modalOpen,
  modalClose
})

// console.log(items)

  // const someProducts = [];

    // for (let i = 0; i < 4; i++) {
      // console.log(items)
  //     // let randomProduct = items[Math.floor(Math.random() * items.length)];
  //     // someProducts.forEach((product) => {
  //     //   if (product.id == randomProduct.id) {
  //     //     randomProduct = items[Math.floor(Math.random() * items.length)];
  //     //   }
  //     // })
  //   //   someProducts.push(randomProduct);
    // }
  //   console.log(someProducts)


  definePageMeta({
  layout: false
})
</script>


<template>
  <NuxtLayout name="header-home"/>
  <TopArticle />
  <AdvantegesArticle />
  <ProductsArticle :items="items" @modal-open="modalOpen"/>
  <AboutArticle />
  <BottomArticle />

  <ModalProduct v-if="modalOn" @modal-close="modalClose" @add-to-cart="addToCart"/>
  <NuxtLayout name="footer-home"/>




</template>


