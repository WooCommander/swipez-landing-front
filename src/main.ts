import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import en from '@/locale-en'; // объект с переводами
import ru from '@/locale-ru'; // объект с переводами
import ch from '@/locale-ch'; // объект с переводами
const i18n = createI18n({
  locale: 'ru', // начальная локаль
  legacy: false,
  fallbackLocale: 'en', // Язык для подстановки, если перевод не найден
  messages: {
    en,ru, ch
  },
});

createApp(App).use(router).use(i18n).mount('#app');
