<template>
  <tab-ui navTitle="Profile i18n" pageTitle="Profile i18n page title">
    <template v-slot:tabContent>
      <ExploreContainer name="Profile" />
    </template>
  </tab-ui>
</template>

<script>
import TabUi from '@/components/ui/TabUI.vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  name: 'ProfileView',
  components: {
    ExploreContainer,
    TabUi,
  },
};
</script>
