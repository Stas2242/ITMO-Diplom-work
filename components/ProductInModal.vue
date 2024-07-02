<script setup>
defineProps({
    imageUrl: String,
    productName: String,
    description: String,
    price: Number,
    onClickAdd: Function,

})

</script>

<template>
    `<img
              class="product_pic w-1/4 object-cover"
              :src="imageUrl"
              alt=""
            />
            <div class="product-info flex flex-col">
              <div class="product-info__descriprion text-[#2A254B] pl-3">
                <div class="product-info__descriprion__name text-2xl pb-3">
                  {{productName}}
                </div>
                <div class="product-info__descriprion__price text-lg pb-3">
                  {{price}} $
                </div>
                <h2 class="text-[#2A254B] text-lg pb-3"></h2>
                <div class="product-info__descriprion__text pb-3">
                  {{description}}
                </div>
                <form class="flex max-w-xs mx-auto">
                    <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" id="decrement-button-modal" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                         </svg>
                    </button>
                    <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="amountInput bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="1" required />
                    <button type="button" id="increment-button-modal" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                    </div>
                </form>
              </div>
            </div>`
</template>
