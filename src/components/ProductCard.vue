<template>
  <div
    class="border border-gray-200 rounded-lg hover:shadow-lg transform transition-hover duration-200"
  >
    <div class="relative padded-image">
      <img :src="product.images" class="absolute top-0 w-full" v-bind:alt="product.seo_url" />
      <img
        v-show="product.stock_qty < 20"
        alt="limited-offer"
        class="absolute top-0 w-full"
        src="https://www.coverscart.com/image/limited.png"
      />
    </div>
    <div class="text-center">
      <div class="px-1.5 mt-4 font-semibold text-base text-primary line-clamp-1">
        <span v-bind:title="product.name">{{ product.name }}</span>
      </div>
      <div class="text-sm sm:text-base text-gray-800 bg-gray-300 px-1 sm:px-1.5 py-1.5">
        <span>{{ product.material_type }}</span>
      </div>
      <div>
        <span class="font-bold px-1.5 text-accent text-base">
          {{ product.discounted_price }}
        </span>
        <span class="font-normal line-through price px-1.5 text-sm">
          {{ product.price }}
        </span>
      </div>
    </div>
    <div class="flex item-bottom justify-center">
      <div
        class="border-r border-t rounded-tl-md rounded-tr-md w-1/2 text-primary flex items-center justify-center py-2.5 cart cursor-pointer"
        title="Add To Cart"
        v-on:click="addToCart"
        :class="{ 'is-loading': isLoading }"
      >
        <Icon v-if="!isLoading" name="shopping-cart-plus" :size="3" />
        <Icon v-else name="rotate" :size="3" />
      </div>
      <div
        class="border-t rounded-tl-md rounded-tr-md w-1/2 flex items-center justify-center py-2.5 cursor-pointer"
        title="Add To Wishlist"
        v-on:click="addToWishlist"
      >
        <Icon v-if="!isAddedToWIshList" stroke="stroke-red-700" name="heart" :size="3" />
        <Icon v-else stroke="stroke-red-700" fill="fill-red-700" name="heart" :size="3" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, ref } from 'vue';
  import { Product } from '@/types/product';

  defineProps<{
    product: Product;
  }>();

  const isLoading = ref(true);

  const isAddedToWIshList = ref(true);

  function addToCart() {
    return '';
  }

  function addToWishlist() {
    return '';
  }
</script>

<style lang="css">
  .padded-image:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
</style>
