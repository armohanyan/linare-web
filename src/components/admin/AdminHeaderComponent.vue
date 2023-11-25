<template>
  <div class="page-container">
    <md-app>

      <md-app-drawer md-permanent="full">

        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>speed</md-icon>
            <span class="md-list-item-text">
              <router-link to="/admin/dashboard">Dashboard</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>format_list_bulleted</md-icon>
            <span class="md-list-item-text">
              <router-link to="/admin/dashboard/categories">Categories</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>shopping_bag</md-icon>
            <span class="md-list-item-text">
              <router-link to="/admin/dashboard/products">Products</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>groups</md-icon>
            <span class="md-list-item-text">
              <router-link to="/admin/dashboard/about">About</router-link>
            </span>
          </md-list-item>


          <md-list-item>
            <md-icon>contact_page</md-icon>
            <span class="md-list-item-text">
              <router-link to="/admin/dashboard/contact">Contact</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>comment</md-icon>
            <span class="md-list-item-text">
              <router-link to="/admin/dashboard/contact">Testimonials</router-link>
            </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <div class="flex">
        <md-app-toolbar class="md-primary">
          <span class="md-title">Admin Dashboard</span>
        </md-app-toolbar>
      </div>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, .12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
export default {
  name: 'AdminHeaderComponent'
}
</script>