<template>
  <ion-page class="ion-page" id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Wishlist</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonContent,
    IonButtons,
    IonBackButton,
    IonHeader,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
</script>
<style scoped></style>
