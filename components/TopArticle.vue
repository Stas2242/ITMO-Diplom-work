<template>
  <article class="top-article flex flex-col relative w-full min-h-96">
    <div
      class="flex flex-col px-10 bg-white sm:absolute sm:z-10 sm:right-36 sm:top-28 sm:min-w-48 sm:max-w-96 sm:min-h-48"
    >
      <div class="text-[#22202E] text-2xl py-3">
        Luxury homeware for people who love timeless desighn quality
      </div>
      <div class="text-[#726E8D] text-base py-3">
        Shop the new Spring 2024 collection today
      </div>
      <div class="flex justify-center py-3">
        <button
          class="bg-[#F9F9F9] text-[#2A254B] border-2 rounded p-1 max-w-40 cursor-pointer transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="all-products-link"><NuxtLink to="/products">View collection</NuxtLink></div>
        </button>
      </div>
    </div>

    <img
      class="w-full h-full z-0 object-cover sm:absolute sm:left-0 sm:top-0"
      src="/img/spacejoy-9M66C_w_ToM-unsplash.jpg"
      alt="interier"
    />
  </article>
</template>
