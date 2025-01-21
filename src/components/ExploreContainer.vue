<template>
  <div class="ExplorerContainer">
    <strong>{{ name }}</strong>
    <select-ui
      :defaultValue="$i18n.locale"
      :options="[
        { displayTitle: 'English', value: 'en' },
        { displayTitle: 'Pусский', value: 'ru' },
      ]"
      @change="switchLanguage"
    />
    <strong>Sample translation: {{ $t('COMMON.LOCALE_NAME') }}</strong>
  </div>
</template>

<script>
import SelectUi from '@/components/ui/SelectUI.vue';

export default {
  name: 'ExploreContainer',
  components: {
    SelectUi,
  },
  props: {
    name: {
      type: String,
      required: true,
      note: 'The name. Required',
    },
  },
  methods: {
    switchLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>

<style lang="scss" scoped>
.ExplorerContainer {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  & strong {
    font-size: 20px;
    line-height: 26px;
  }

  & p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }

  & a {
    text-decoration: none;
  }
}
</style>
