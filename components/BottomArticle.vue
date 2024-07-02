<template>
  <article
    class="bottom-article relative flex justify-center content-center items-center"
  >
    <img
      class="w-full h-96 z-0 object-cover"
      src="/img/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"
      alt=""
    />

    <div
      class="absolute top-10 flex flex-col justify-around items-center h-3/4 z-10 p-10 bg-opacity-50 bg-white"
    >
      <h2 class="text-2xl">Join the club and get the benefits</h2>

      <p>
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>

      <div class="flex flex-wrap justify-center">
        <label class="px-3">
          Exclusive offers
          <input type="checkbox" />
        </label>
        <label class="px-3">
          Free events
          <input type="checkbox" />
        </label>
        <label class="px-3">
          Large discounts
          <input type="checkbox" />
        </label>
      </div>

      <form>
        <input
          class="bg-white p-3 w-8/12"
          type="email"
          placeholder="your@email.com"
        />
        <input
          class="devNotice bg-[#2A254B] text-white px-5 py-3 cursor-pointer"
          type="button"
          value="Sign up"
        />
      </form>
    </div>
  </article>
</template>
