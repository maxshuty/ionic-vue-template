<template>
  <ion-list>
    <ion-item>
      <ion-select
        placeholder="Select a Fruit"
        @ionChange="handleChange"
        :value="defaultValue"
      >
        <div v-if="label" slot="label">
          {{ label }} <ion-text color="danger">(Required)</ion-text>
        </div>

        <template v-for="(option, index) in options" :key="index">
          <ion-select-option :value="option.value">
            {{ option.displayTitle }}
          </ion-select-option>
        </template>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
import {
  IonList,
  IonItem,
  IonSelect,
  IonText,
  IonSelectOption,
} from '@ionic/vue';

export default {
  name: 'SelectUi',
  sample: `
    <select-ui
      label="Select Label Here"
      :options="[{displayTitle: 'key', value: 'value'}]"
    />
  `,
  components: {
    IonList,
    IonItem,
    IonSelect,
    IonText,
    IonSelectOption,
  },
  props: {
    defaultValue: {
      type: String,
      default: null,
      note: 'The default value of the select. Default: `null`',
    },
    label: {
      type: String,
      default: null,
      note: 'The label for the select. Default `null`',
    },
    options: {
      type: Array,
      required: true,
      note: `The select options, shaped like [{displayTitle: '', value: ''}]. Required`,
    },
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.detail.value);
    },
  },
};
</script>
