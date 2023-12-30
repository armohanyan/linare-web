<template>
  <div id="app">
    <HeaderComponent v-if="isRouteBelongsToUser" />

    <admin-header-component  v-if="!isNotFound  && !isRouteBelongsToUser" />

    <back-to-top-button></back-to-top-button>

    <div  v-if="isRouteBelongsToUser || isNotFound" class="content">
      <router-view></router-view>
    </div>

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
      return !!( this.$route.name !=='NotFound' &&  this.$route.meta && this.$route.meta.userRoute);

    }
  },

  mounted() {
    if(!localStorage.getItem('accessToken')) this.$store.dispatch("setCurrentUser", null);
  }

}
</script>

<style scoped>
.content {
  padding-top: 70px;
}
</style>
