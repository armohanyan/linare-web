<template>
  <div>
    <div class="vue-select" @click="toggleDropdown">
      <span class="selected-option">{{ placeholder }}</span>
      <transition name="slide">
        <div class="dropdown-options-container" v-show="showDropdown">
          <div class="dropdown-options" v-for="option in options" :key="option.value"  :class="{'selected': option === selected}">
            <div class="dropdown-options--cell" @click="selectOption(option)"><span class="option-text">{{ option.label }}</span></div>
          </div>
        </div>`
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageComponent',
  data() {
    return {
      selectedLanguage: 'en',
      showDropdown: false,
      selected: { label: "English", value: "en" },
      placeholder: 'English',
      options: [
        {
          label: 'English',
          value: 'en'
        },
        {
          label: 'Русский',
          value: 'ru'
        },
        {
          label: 'Հայերեն',
          value: 'am'
        }
      ]
    };
  },

  methods: {
    changeLanguage(selectedLanguage) {
      console.log(selectedLanguage)
      this.$i18n.setLocaleMessage('en', require('../../locales/en.json'));
      this.$i18n.setLocaleMessage('ru', require('../../locales/ru.json'));
      this.$i18n.setLocaleMessage('am', require('../../locales/am.json'));

      this.$i18n.locale = selectedLanguage;
    },

    toggleDropdown() {
      console.log('yrsy')
      this.showDropdown = !this.showDropdown;
    },

    selectOption(option) {
      this.selected = option
      this.placeholder = option.label;
      this.$i18n.locale = option.value

      // inform parent (the form) of a selection so the model can be updated.
      // this.$emit('interface', this.selected)
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

.vue-select {
  text-align: center;
  width: 300px;
  background-color: #fff;
  margin: 20px auto;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.06);
  border: none;
  transition: all 200ms linear;
}
.vue-select .selected-option {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  padding: 15px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  transition: all 200ms linear;
}
.vue-select .selected-option:hover {
  color: rgba(0, 0, 0, 0.45);
}
.vue-select .selected-option svg {
  fill: #42b883;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  transition: fill 300ms linear;
}
.vue-select .selected-option svg:hover {
  fill: #2e805b;
}

.dropdown-options-container {
  height: 300px;
}

.dropdown-options--cell {
  padding: 15px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropdown-options--cell:hover {
  background-color: #f4fbf8;
  border: none;
}

.dropdown-options.selected .dropdown-options--cell {
  background-color: #f4fbf8;
  border: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: height 150ms ease;
}

.slide-enter,
.slide-leave-to {
  height: 0px;
}

</style>
