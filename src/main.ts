import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist); // Enable persistence

app.use(router);
app.use(pinia);

app.mount('#app');
