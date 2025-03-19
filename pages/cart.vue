<template>
  <div class="h-screen flex flex-col justify-between">
    <NuxtLayout name="header" />
    <CartTemplate />

    <NuxtLayout name="footer" />
  </div>
</template>

<script setup>
import CartTemplate from "~/components/CartTemplate.vue";

definePageMeta({
  layout: false,
});
</script>
