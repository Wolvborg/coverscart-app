<template>
  <ion-page>
    <ion-tabs>
      <ion-header>
        <ion-toolbar>
          <ion-title>Main View</ion-title>
          <ion-button @click="() => router.push('/search')">Open Search</ion-button>
        </ion-toolbar>
      </ion-header>
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
  import { useRouter } from 'vue-router';
  import {
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonButton,
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

  const router = useRouter();
</script>
<style scoped></style>
