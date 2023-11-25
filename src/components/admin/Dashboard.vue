
<template>
  <div>
    dashboard here
  </div>
</template>
<script>
import HeaderComponent from "@/components/admin/AdminHeaderComponent.vue";
export default {
  name: 'Dashboard',
  components: { HeaderComponent },
  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    }
  }
}
</script>

<style scoped>

</style>