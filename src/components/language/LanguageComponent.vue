<template>
  <div style="margin-top: 7px">
    <div class="vue-select" @click="toggleDropdown">
      <span class="selected-option">{{ placeholder }}</span>
        <div class="dropdown-options-container" v-show="showDropdown">
          <div class="dropdown-options" v-for="option in options" :key="option.value"  :class="{'selected': option === selected}">
            <div class="dropdown-options--cell" @click="selectOption(option)"><span class="option-text">{{ option.label }}</span></div>
          </div>
        </div>
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
    toggleDropdown() {
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

.vue-select {
  text-align: center;
  width: 150px;
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
  position: relative;
  box-sizing: border-box;
  transition: all 200ms linear;
  font-weight: 700;
  font-size: 18px;
}

.vue-select .selected-option:hover {
  color: rgba(0, 0, 0, 0.45);
}

.dropdown-options-container {
  height: 171px;
  margin-top: 47px;
}

.dropdown-options--cell {
  padding: 15px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 18px;
}

.dropdown-options--cell:hover {
  background-color: #f4fbf8;
  border: none;
}

.dropdown-options.selected .dropdown-options--cell {
  background-color: #f4fbf8;
  border: none;
}

@media only screen and (max-width: 765px) {
  .vue-select{
    height: 55px;
    width: 90%;
  }

  .dropdown-options-container{
    margin-top: 0;
  }

  .vue-select .selected-option{
    color: #2490EB;
  }

  .dropdown-options.selected .dropdown-options--cell{
    color: #2490EB;
  }

  .dropdown-options--cell{
    padding: 7px;
  }
}
</style>
