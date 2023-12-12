import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en: require('./locales/en.json'),
    ru: require('./locales/ru.json'),
    am: require('./locales/am.json'),
};

export  default  new VueI18n({
    locale: "en",
    messages
});