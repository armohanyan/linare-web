
<template>
  <div>
    dashboard here
  </div>
</template>
<script>

export default {
  name: 'Dashboard',
  components: {},
  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    }
  }
}
</script>

<style scoped>

</style>