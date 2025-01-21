<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Collection</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Collection</ion-title>
        </ion-toolbar>
      </ion-header>

      <slot name="tabContent" />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';

export default {
  name: 'TabUi',
  sample: `
    <tab-ui navTitle="Nav Title" pageTitle="Page Title">
      <template v-slot:tabContent>
        <ion-content>
          <strong>Content here!</strong>
        </ion-content>
      </template>
    </tab-ui>
  `,
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
  props: {
    navTitle: {
      type: String,
      required: true,
      note: 'The title in the nav. Required',
    },
    pageTitle: {
      type: String,
      required: true,
      note: 'The title within the page. Required',
    },
  },
};
</script>
