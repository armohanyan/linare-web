<template>
  <button v-if="showButton" @click="scrollToTop" id="back-to-top-btn">
    <i class="fa-solid fa-chevron-up"></i>
  </button>
</template>

<script>
export default {
  name: "BackToTopButton",
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 200;
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
};
</script>

<style scoped>
#back-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  background-color: #2490EB;
  height: 50px;
  width: 50px;
  z-index: 99999;
  border-radius: 5px;
  padding: 5px 0.5% 0;
}

.fa-chevron-up::before {
  color: white;
  font-size: 20px;
}
</style>
