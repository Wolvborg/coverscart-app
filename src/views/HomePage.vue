<template>
  <ion-page>
    <ion-tabs>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button :auto-hide="false"></ion-menu-button>
          </ion-buttons>
          <ion-title>Coverscart</ion-title>
          <ion-buttons slot="secondary">
            <ion-button router-link="/search" router-direction="forward">
              <ion-icon slot="icon-only" :icon="search"></ion-icon>
            </ion-button>
            <ion-button router-link="/wishlist" router-direction="forward">
              <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-buttons slot="primary" router-link="/cart" router-direction="forward">
            <ion-button>
              <ion-icon slot="icon-only" :icon="cartOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
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
  import {
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonButton,
    IonButtons,
    IonTabButton,
    IonTabs,
    IonMenuButton,
  } from '@ionic/vue';

  import { apps, home, person, search, heartOutline, cartOutline } from 'ionicons/icons';

  const tabs: Tab[] = [
    {
      title: 'Home',
      name: 'home',
      to: '/home/home-tab',
      icon: home,
    },
    {
      title: 'Categories',
      name: 'categories',
      to: '/home/categories-tab',
      icon: apps,
    },
    {
      title: 'Profile',
      name: 'profile',
      to: '/home/profile-tab',
      icon: person,
    },
  ];
</script>
<style scoped></style>
