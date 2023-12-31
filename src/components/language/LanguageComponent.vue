<template>
  <div style="margin-top: 7px">
    <div class="vue-select" @click="toggleDropdown">
      <div class="selected-option">
        <img class="lang_flags" :src="selected.img" alt="" />
        <span class="selected-text">{{ selected.label }}</span>
      </div>
      <div class="dropdown-options-container" v-show="showDropdown">
        <div class="dropdown-options" v-for="option in options" :key="option.value">
          <div class="text_flag">
            <img class="lang_flags" :src="option.img" alt="" />
            <div class="dropdown-options--cell" @click="selectOption(option)">
              <span class="option-text">{{ option.label }}</span>
            </div>
          </div>
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
      options: [
        {
          label: 'English',
          img: require("../../assets/flags/en_flag.png"),
          value: 'en'
        },
        {
          label: 'Русский',
          img: require("../../assets/flags/ru_flag.png"),
          value: 'ru'
        },
        {
          label: 'Հայերեն',
          img: require("../../assets/flags/arm_flag.png"),
          value: 'am'
        }
      ]
    };
  },

  computed: {
    selected() {
      return this.options.find(option => option.value === this.$i18n.locale)
    }
  },

  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    selectOption(option) {
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
  border: none;
  transition: all 200ms linear;
}

.vue-select .selected-option {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  padding: 12px;
  gap: 20px;
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
  margin-top: 62px;
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

.text_flag:hover {
  background-color: #f4fbf8;
  color: #2490EB;
  border: none;
}

.text_flag.selected .dropdown-options--cell, .lang_flags {
  background-color: #f4fbf8;
  border: none;
}

.text_flag{
  display: flex;
  align-items: center;
  padding-left: 13px;
  gap: 4px;
}

.lang_flags{
  width: 25px;
  height: 25px;
  background: transparent;
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

  .dropdown-options.selected .dropdown-options--cell, .lang_flags{
    color: #FFFFFF;
  }

  .dropdown-options--cell{
    padding: 7px;
  }
}
</style>
