<template>
  <ion-page>
    <ion-split-pane when="md" content-id="main">
      <ion-menu content-id="main">
        <ion-header>
          <ion-toolbar color="tertiary">
            <ion-title>Search</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding"> Menu Content </ion-content>
      </ion-menu>

      <div class="ion-page" id="main">
        <ion-header>
          <ion-toolbar>
            <ion-title>Main View</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          {{ name }} {{ count }} {{ doubleCount }}

          <ion-button @click="click">Default</ion-button>
        </ion-content>
      </div>
    </ion-split-pane>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonSplitPane,
    IonButton,
    IonContent,
    IonHeader,
    IonMenu,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
  import { useRootStore } from '@/stores/index';
  import { storeToRefs } from 'pinia';

  const store = useRootStore();

  const { name, count, doubleCount } = storeToRefs(store);
  // the increment action can just be extracted
  const { increment } = store;

  function click() {
    console.log('sear');
    increment();
  }
</script>
<style scoped></style>
