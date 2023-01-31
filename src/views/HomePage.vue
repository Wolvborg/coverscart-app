<template>
  <ion-page>
    <ion-tabs>
      <!-- https://ionicframework.com/docs/vue/navigation#working-with-tabs -->
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button v-for="tab in tabs" :key="tab.name" :tab="tab.name" :href="tab.to">
          <ion-icon :icon="tab.icon" aria-hidden="true"></ion-icon>
          <ion-label>{{ tab.title }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
  import { Tab } from '@/types/navigations';
  import {
    IonIcon,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
  } from '@ionic/vue';

  import { appsOutline, homeOutline, personOutline } from 'ionicons/icons';

  const tabs: Tab[] = [
    {
      title: 'Home',
      name: 'home',
      to: '/home/home-tab',
      icon: homeOutline,
    },
    {
      title: 'Categories',
      name: 'categories',
      to: '/home/categories-tab',
      icon: appsOutline,
    },
    {
      title: 'Profile',
      name: 'profile',
      to: '/home/profile-tab',
      icon: personOutline,
    },
  ];
</script>
<style scoped></style>
