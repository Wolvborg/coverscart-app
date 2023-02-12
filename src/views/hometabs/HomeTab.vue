<template>
  <ion-page>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 overflow-y-auto">
      <product-card v-for="product in products" :key="product.seo_url" :product="product" />
    </div>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import { IonPage } from '@ionic/vue';
  import { HomePageProductRequest } from '@/services/ElasticRequest';
  import { Product } from '@/types/product';

  import ProductCard from '@/components/ProductCard.vue';

  const products: Ref<Product[]> = ref([]);

  const homePageProductRequest = new HomePageProductRequest();
  homePageProductRequest
    .sortingBy('viewed', 'desc')
    .then((response) => {
      console.log(response);
      // results.value = response.data.hits?.hits;

      response.data.hits?.hits.forEach((element) => {
        const product = {
          discounted_price: element._source.discounted_price,
          images: element._source.images,
          keywords: element._source.keywords,
          material_type: element._source.material_type,
          name: element._source.name,
          price: element._source.price,
          seo_url: element._source.seo_url,
          stock_qty: element._source.stock_qty,
          viewed: element._source.viewed,
        };

        products.value.push(product);
      });
    })
    .catch((error) => {
      console.error(error);
    });
</script>
<style scoped></style>
