<template>
  <div id="app">
    <HeaderComponent v-if="isRouteBelongsToUser" />
    <admin-header-component  v-if="!isNotFound  && !isRouteBelongsToUser" />

    <back-to-top-button></back-to-top-button>

    <router-view v-if="isRouteBelongsToUser || isNotFound" ></router-view>

    <FooterComponent v-if=" isRouteBelongsToUser" />
  </div>
</template>

<script>

import BackToTopButton from "@/components/pages/backToTopButton/BackToTopButton.vue";
import FooterComponent from "./components/pages/footer/FooterComponent.vue";
import HeaderComponent from "./components/pages/header/HeaderComponent.vue";
import AdminHeaderComponent from "@/components/admin/AdminHeaderComponent.vue";

export default {
  name: 'App',
  components: {AdminHeaderComponent, FooterComponent, HeaderComponent, BackToTopButton },
  computed: {
    isNotFound() {
      return this.$route.name ==='NotFound'
    },

    isRouteBelongsToUser() {
      console.log(this.$route)
      return !!( this.$route.name !=='NotFound' &&  this.$route.meta && this.$route.meta.userRoute);

    }
  },

  mounted() {
    if(!this.$cookies.get("accessToken")) this.$store.dispatch("setCurrentUser", null);
  }

}
</script>

<style>
*{
  font-family: ui-monospace;
}
</style>
