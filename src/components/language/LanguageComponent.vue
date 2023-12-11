<template>
  <div>
    <label for="language-select">Select Language:</label>
    <select id="language-select" v-model="selectedLanguage" @change="changeLanguage">
      <option v-for="(value, key) in supportedLanguages" :key="key" :value="key">{{ value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LanguageComponent",
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
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
  },
};
</script>
