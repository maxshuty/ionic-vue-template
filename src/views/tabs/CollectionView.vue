<template>
  <tab-ui navTitle="Collection i18n" pageTitle="Collection i18n page title">
    <template v-slot:tabContent>
      <ExploreContainer name="Collection" />
    </template>
  </tab-ui>
</template>

<script>
import TabUi from '@/components/ui/TabUI.vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  name: 'CollectionView',
  components: {
    ExploreContainer,
    TabUi,
  },
};
</script>
