import Vue from 'vue';
import VueI18n from 'vue-i18n';
import AllLocales from 'locale';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: ccutils.getLanguage(),          // set locale
  fallbackLocale: 'zh-CN',
  messages: AllLocales,                   // set locale messages
});

export default i18n;
