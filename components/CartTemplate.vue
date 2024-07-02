<template>
    <div class="product flex justify-between py-3">
    <div class="product-info md:w-1/3 flex">
        <img class="product-info__pic max-w-24 max-h-40 object-cover" :src="imageUrl" alt="" />
        <div class="product-info__descriprion text-[#2A254B] pl-3">
            <div class="product-info__descriprion__name text-lg pb-3">
                {{productName}}
            </div>
            <div class="product-info__descriprion__text pb-3">
                {{description}}
            </div>
            <div class="product-info__descriprion__price text-lg">{{price}}</div>
        </div>
    </div>
    <div class="product-amount w-1/3 text-end">0</div>
    <div class="product-total w-1/3 text-end">0</div>
</div>
</template>