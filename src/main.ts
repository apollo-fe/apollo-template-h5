import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/style.css';
import 'amfe-flexible';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(NutUI);
app.mount('#app');
