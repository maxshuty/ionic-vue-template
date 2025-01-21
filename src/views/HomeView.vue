<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab2" href="/tabs/collection">
          <ion-icon aria-hidden="true" :icon="carSport" />
          <ion-label> My Collection i18n {{ $t('COMMON.BACK') }} </ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/market-place">
          <ion-icon aria-hidden="true" :icon="basket" />
          <ion-label>Market Place i18n</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tabs/profile">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Profile i18n</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { basket, carSport, person } from 'ionicons/icons';
</script>
