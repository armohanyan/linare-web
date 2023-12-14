<template>
  <div>
    <b-dropdown v-model="selectedLanguage" @change="changeLanguage" id="dropdown-left" text="Select language" variant="primary" class="m-2">
      <b-dropdown-item v-for="(value, key) in supportedLanguages" :key="key" :value="key">{{ value }}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LanguageComponent',
  data() {
    return {
      selectedLanguage: 'en',
      supportedLanguages: {
        en: 'English',
        ru: 'Русский',
        am: 'Հայերեն',
      },
    };
  },

  methods: {
    changeLanguage(selectedLanguage) {
      this.$i18n.setLocaleMessage('en', require('../../locales/en.json'));
      this.$i18n.setLocaleMessage('ru', require('../../locales/ru.json'));
      this.$i18n.setLocaleMessage('am', require('../../locales/am.json'));

      this.$i18n.locale = selectedLanguage;
    },
  },
};
</script>

<style scoped>
>>> .btn-group > .btn {
  padding: 8% 8%;
  gap: 12px;
}

>>> .dropdown-menu {
  min-width: 11rem;
  margin-left: 10px;
}
</style>
