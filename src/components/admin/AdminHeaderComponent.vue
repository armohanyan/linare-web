<template>
  <div class="menu-wrapper">
    <MobileHeader class="admin_mobile_header" :tabs="tabs" :isAdmin="true"/>
    <div class="sidebar-header">
      <div v-if="getCurrentUser" class="sidebar_hide">
        <div class="sideBar" :class="{ showMenu: isMenuVisible, widthChange: isMenuVisible }">
          <div class="sidebar_images">
            <img class="sidebar_img" src="@/assets/logos/linare_white.png" alt=""/>
            <i id="desktop" @click="toggleMenuList" class="fa-solid fa-bars"></i>
          </div>
          <ul style="padding-top: 4%; padding-left: 0" :class="{ 'show-icons-only': isMenuVisible }">
            <li v-for="tab in tabs" :key="tab.name" class="lists" @click="navigate(tab.name, tab.path)">
              <i :class="['fas', tab.class]"></i>
              <label class="link_texts">{{ tab.label }}</label>
            </li>

            <li class="lists" @click="logout">
              <i class="fa-solid fa-right-from-bracket"></i>
              <label class="link_texts">Logout</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MobileHeader from "@/components/MobileHeader.vue";
import AccountService from "../../services/AccountService";

const tabs = [
  {
    label: 'Dashboard',
    class: 'fa-chart-line',
    path: '/admin/dashboard',
    name: 'dashboard'
  },
  {
    label: 'Categories',
    class: 'fa-layer-group',
    path: '/admin/dashboard/categories',
    name: 'categories'
  },
  {
    label: 'Products',
    class: 'fa-store',
    path: '/admin/dashboard/products',
    name: 'products'
  },
  {
    label: 'Contacts',
    class: 'fa-address-book',
    path: '/admin/dashboard/contacts',
    name: 'contacts'
  },
  {
    label: 'Testimonials',
    class: 'fa-address-card',
    path: '/admin/dashboard/testimonials',
    name: 'testimonials'
  },
  {
    label: 'Partners',
    class: 'fa-handshake',
    path: '/admin/dashboard/partners',
    name: 'partners'
  },
  {
    label: 'Users',
    class: 'fa-users',
    path: '/admin/dashboard/users',
    name: 'users'
  },
  {
    label: 'Settings',
    class: 'fa-gear',
    path: '/admin/dashboard/settings',
    name: 'settings'
  },
]

export default {
  components: {MobileHeader},
  data() {
    return {
      tabs: tabs,
      isMenuVisible: false,
      hideList: false,
      selectedIndex: null,
      menuItems: ["Dashboard", "Categories", "Products", "Contacts", "Testimonials", "Partners"],
    };
  },
  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },
  methods: {
    toggleMenuList() {
      this.isMenuVisible = !this.isMenuVisible;
    },

    navigate(name, path) {
      this.selectedTab = name

      this.$router.push({path})
    },

    logout() {
      new AccountService().reset()
      this.$router.push({name: 'sign-in'})
      this.$store.dispatch('setCurrentUser', null);
    }
  },
};
</script>

<style scoped>
.lists > .fas{
  font-size: 30px;
}

.fa-bars::before{
  font-size: 35px;
}

.show-icons-only .link_texts {
  display: none;
}

.show-icons-only .lists img {
  width: 30px !important;
  height: 30px !important;
  margin-left: 20% !important;
}

a {
  text-decoration: none !important;
}

.link_texts {
  cursor: pointer;
  color: white;
  font-size: 23px;
}

.sidebar_images {
  padding: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
}

.lists {
  list-style: none;
  display: flex;
  gap: 20px;
  font-size: 25px;
  cursor: pointer;
  align-items: center;
  border-radius: 0 !important;
}

.sideBar {
  position: relative;
  z-index: 20;
  height: 100vh;
  width: 400px;
  color: white;
  background-color: #2490EB;
  transition: 0.3s ease-in-out;
}

.sideBar.widthChange {
  width: 120px;
  text-align: center;
}

.sidebar_img {
  width: 35%;
}

.sideBar li {
  padding: 15px 20px;
  transition: 0.3s ease-in-out;
}

.sideBar li i {
  margin-right: 8px;
}

.sideBar li:hover {
  background-color: #14457B;
  border-radius: 10px;
}

.sideBar span {
  position: absolute;
  color: #ffffff;
  top: 20px;
  right: 20px;
}

.sideBar .cross-icon {
  display: none;
  color: #001629;
}

.sidebar-header {
  display: flex;
}

.content {
  width: 100%;
  height: 100vh;
}

header {
  background-color: #ffffff;
  height: 10%;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#desktop {
  cursor: pointer;
}

.menu-button div:nth-child(1) {
  position: absolute;
  height: 4px;
  border-radius: 20px;
  background-color: #c7c7c7;
  width: 100%;
}

.menu-button div:nth-child(2) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  border-radius: 20px;
  background-color: #c7c7c7;
  width: 80%;
}

.menu-button div:nth-child(3) {
  position: absolute;
  height: 4px;
  border-radius: 20px;
  bottom: 0;
  background-color: #c7c7c7;
  width: 100%;
}

header img {
  height: 40px;
}

header h1 {
  color: #0092ff;
}

.sideBar.showMenu {
  left: 0;
  padding-top: 5%;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #ccc;
}

::-webkit-scrollbar-thumb {
  background: #0092ff;
}

.admin_mobile_header {
  display: none;
}

@media (max-width: 910px) {
  .sideBar {
    display: none;
  }

  .admin_mobile_header {
    display: block;
  }
}

@media (max-width: 900px) {
  #desktop {
    display: none;
  }

  .sideBar {
    position: absolute;
    width: 30%;
    top: 0;
    left: -100%;
  }

  .sideBar .cross-icon {
    display: block;
  }
}

@media (max-width: 700px) {
  .sideBar {
    width: 40%;
  }
}

@media (max-width: 400px) {
  .sideBar {
    width: 60%;
  }

  header h1 {
    font-size: 20px;
  }
}

@media (max-width: 320px) {
  .sideBar {
    width: 80%;
  }
}
</style>
