<template>
  <tab-ui navTitle="Market Place i18n" pageTitle="Market Place i18n page title">
    <template v-slot:tabContent>
      <ExploreContainer name="Market Place" />
    </template>
  </tab-ui>
</template>

<script>
import TabUi from '@/components/ui/TabUI.vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  name: 'MarketPlaceView',
  components: {
    ExploreContainer,
    TabUi,
  },
};
</script>
