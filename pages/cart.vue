<template>
<NuxtLayout name="header"/>
<CartTemplate/>

<NuxtLayout name="footer"/>
</template>

<script setup>
import CartTemplate from "~/components/CartTemplate.vue"

definePageMeta({
  layout: false
})
</script>