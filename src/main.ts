import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';
import { createI18n } from 'vue-i18n';
import messages from '@/assets/localization/messages.json';
import { validateEnv } from '@/utils/validateEnv';

validateEnv(['VITE_API_BASE_URL', 'VITE_FRONT_SECRET_KEY']);

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist); // Enable persistence

const i18n = createI18n({
  legacy: false, // Must be false for Vue 3 Composition API support
  locale: 'en', // Default language
  fallbackLocale: 'en',
  messages
});

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount('#app');
