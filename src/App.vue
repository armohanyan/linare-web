<template>
  <div id="app">
    <div v-if="getCurrentUser" class="d-flex">
      <admin-header-component/>

      <div class="admin-section pt-3 pl-3">
        <router-view></router-view>
      </div>
    </div>

    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import AdminHeaderComponent from "@/components/admin/AdminHeaderComponent.vue";

export default {
  name: 'App',
  components: { AdminHeaderComponent },
  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },

  mounted() {
    if(!this.$cookies.get("accessToken")) this.$store.dispatch("setCurrentUser", null);
  }

}
</script>

<style>
</style>
