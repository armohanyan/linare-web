<template>
  <header v-if="displayTabs" class="admin_header">
    <div v-if="isAdmin" class="d-flex justify-content-between align-items-center">
      <router-link to="/">
        <img style="width: 70px" src="../assets/logos/linare-logo-blue.png" alt="Logo"/>
      </router-link>
      <div class="adminMobileIcon" @click="toggleMenuList">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>

    <div class="sidebar-header">
      <div class="sidebar_hide">
        <div class="admin_sideBar" :class="{ showAdminMenu: isMenuVisible }">
          <div class="sidebar_images">
            <router-link to="/">
              <img src="../assets/logos/linare-logo-white.png" alt="Logo"/>
            </router-link>
            <div class="menu_icon">
              <i id="desktop" style="font-size: 30px" @click="toggleMenuList" class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <ul style="padding-top: 4%; padding-left: 0">
            <li v-for="tab in tabs" :key="tab.name" class="lists" @click="navigate(tab.name, tab.path)">
              <i :class="['fas', tab.class]"></i>
              <label class="link_texts">{{ tab.label }}</label>
            </li>
            <li v-if="isAdmin" class="lists" @click="logout">
              <i class="fa-solid fa-right-from-bracket"></i>
              <label class="link_texts">Logout</label>
            </li>

            <LanguageComponent v-if="!isAdmin"/>
          </ul>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
import AccountService from "../services/AccountService";
import LanguageComponent from "@/components/language/LanguageComponent.vue";

export default {
  name: "MobileHeader",
  components: {LanguageComponent},
  props: ['tabs', 'isAdmin'],
  data() {
    return {
      isMenuVisible: false,
      selectedTab: 'dashboard'
    };
  },
  computed: {
    displayTabs() {
      return !['sign-in', 'sign-up', 'reset-password', 'on-reset-password', 'verify-email'].includes(this.$route.name)
    }
  },
  methods: {
    toggleMenuList() {
      this.isMenuVisible = !this.isMenuVisible;
    },

    navigate(name, path) {
      this.selectedTab = name

      this.$router.push({path})
      this.isMenuVisible = false;
    },

    logout() {
      new AccountService().reset()
      this.$router.push({name: 'sign-in'})
      this.$store.dispatch('setCurrentUser', null);
    }
  }
};
</script>

<style scoped>
.lists > .fas, .fa-right-from-bracket {
  font-size: 23px;
}

.admin_header {
  display: none;
  padding: 2% 2%;
  background-color: #FFFFFF;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  color: white;
  font-size: 23px;
}

.sidebar_images {
  justify-content: space-between;
  display: flex;
  padding: 0 4%;
  align-items: center;
}

.fa-bars::before {
  font-size: 20px;
  color: #13457A;
}

.menu_icon > .fa-bars::before {
  font-size: 35px;
  color: white;
}

.adminMobileIcon {
  cursor: pointer;
  display: block;
}

.lists {
  list-style: none;
  display: flex;
  gap: 20px;
  cursor: pointer;
  border-radius: 0 !important;
  align-items: center;
}

.admin_sideBar {
  position: relative;
  z-index: 20;
  height: 100vh;
  width: 400px;
  color: white;
  background-color: #2490EB;
  transition: 0.3s ease-in-out;
}

.admin_sideBar {
  width: 120px;
  text-align: center;
}

.admin_sideBar li {
  padding: 10px 15px;
  transition: 0.3s ease-in-out;
}

.admin_sideBar li i {
  margin-right: 8px;
}

.admin_sideBar li:hover {
  background-color: #14457B;
  border-radius: 10px;
}

.admin_sideBar span {
  position: absolute;
  color: #ffffff;
  top: 20px;
  right: 20px;
}

.admin_sideBar .cross-icon {
  display: none;
  color: #001629;
}

.sidebar-header {
  display: flex;
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
  height: 60px;
}

header h1 {
  color: #0092ff;
}

.admin_sideBar.showAdminMenu {
  left: 0;
  padding-top: 2%;
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

@media (max-width: 900px) {
  .admin_sideBar {
    position: absolute;
    width: 30%;
    top: 0;
    left: -100%;
  }

  .admin_sideBar .cross-icon {
    display: block;
  }
}

@media (max-width: 700px) {
  .admin_sideBar {
    width: 40%;
  }
}

@media (max-width: 600px) {
  .admin_sideBar {
    width: 55%;
  }
}

@media (max-width: 450px) {
  .admin_sideBar {
    width: 100%;
  }
}


@media (max-width: 400px) {

  header h1 {
    font-size: 20px;
  }

}

@media (max-width: 320px) {
  .admin_sideBar {
    width: 80%;
  }
}
</style>
