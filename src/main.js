import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

/* i18n */
import { createI18n } from 'vue-i18n';
import en from './i18n/en.js';
import ru from './i18n/ru.js';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

const DEFAULT_LANGUAGE = 'en';
const messages = Object.assign(en, ru);

export const i18n = createI18n({
  locale: document.documentElement.lang,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages,
});

defineCustomElements(window);

const app = createApp(App);
app.use(IonicVue);
app.use(router);
app.use(i18n);

router.isReady().then(() => {
  app.mount('#app');
});
