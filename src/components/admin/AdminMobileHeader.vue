<template>
  <header class="admin_header">
    <div class="d-flex justify-content-between">
      <img style="width: 100px" src="../../assets/logos/linare_logo.png" alt="Logo"/>
      <img src="@/assets/icons/menu_icon.png" alt="" class="adminMobileIcon" @click="toggleMenuList"/>
    </div>

    <div class="sidebar-header">
      <div class="sidebar_hide">
        <div class="admin_sideBar" :class="{ showAdminMenu: showAdminMenu, widthChange: hideList }">
          <div class="sidebar_images" :class="{ 'images': hideList }">
            <img :class="{ 'hide-logo': hideList }" class="sidebar_img" src="@/assets/logos/linare_white.png" alt=""/>
            <img src="@/assets/dashboard/menu.png" alt="" id="adminDesktop" @click="toggleMenuList"/>
            <img src="@/assets/dashboard/menu.png" alt="" id="adminDesktop" @click="toggleMenuList"/>
            <img src="@/assets/dashboard/menu.png" alt="" id="adminMobile" @click="toggleMenuList"/>
          </div>
          <ul style="padding-top: 4%; padding-left: 0" :class="{ 'show-icons-only': hideList }">
            <router-link to="/admin/dashboard" :class="{ selected: selectedIndex === 0 }" @click="selectItem(0)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/dashboard.png"
                                     alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Dashboard</label></li>
            </router-link>
            <router-link to="/admin/dashboard/categories" :class="{ selected: selectedIndex === 1 }"
                         @click="selectItem(1)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/categories.png"
                                     alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Categories</label></li>
            </router-link>
            <router-link to="/admin/dashboard/products" :class="{ selected: selectedIndex === 2 }"
                         @click="selectItem(2)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/product.png"
                                     alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Products</label></li>
            </router-link>
            <router-link to="/admin/dashboard/contact" :class="{ selected: selectedIndex === 4 }"
                         @click="selectItem(4)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/contact.png"
                                     alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Contacts</label></li>
            </router-link>
            <router-link to="/admin/dashboard/testimonials" :class="{ selected: selectedIndex === 5 }"
                         @click="selectItem(5)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/testimonials.png"
                                     alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Testimonials</label></li>
            </router-link>
            <router-link to="/admin/dashboard/partners" :class="{ selected: selectedIndex === 5 }"
                         @click="selectItem(6)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/partner.png"
                                     alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Partners</label></li>
            </router-link>

            <router-link to="/admin/dashboard/settings" :class="{ selected: selectedIndex === 5 }"
                         @click="selectItem(7)">
              <li class="lists"><label class="link_texts" :class="{ hideMenuList: hideList }" @click="logout">Settings</label></li>
            </router-link>


            <li class="lists"><label class="link_texts" :class="{ hideMenuList: hideList }" @click="logout">Logout</label></li>
          </ul>
          <span class="cross-icon" @click="hideMenu"></span>
        </div>
      </div>
      <div class="backdrop" @click="hideMenu" :class="{ showBackdrop: showBackdrop }"></div>
    </div>

  </header>
</template>

<script>
import AccountService from "../../services/AccountService";

const tabs = [
  {
    label: 'Dashboard',
    path: '/admin/dashboard'
  },
  {
    label: 'Categories',
    path: '/admin/dashboard/categories'
  },
  {
    label: 'Products',
    path: '/admin/dashboard/products'
  },
  {
    label: 'Contacts',
    path: '/admin/dashboard/contact'
  },
  {
    label: 'Testimonials',
    path: '/admin/dashboard/testimonials'
  },
  {
    label: 'Partners',
    path: '/admin/dashboard/partners'
  },
]
export default {
  name: "AdminMobileHeader",
  data() {
    return {
      tabs: tabs,
      showBackdrop: false,
      isMenuVisible: false,
      hideList: false,
      selectedIndex: null,
      menuItems: ["Dashboard", "Categories", "Products", "Contacts", "Testimonials", "Partners"],
    };
  },
  methods: {
    showAdminMenu() {
        this.isMenuVisible = true;
        this.hideList = false;
        this.showBackdrop = true;
      },
    toggleMenuList() {
      this.showAdminMenu = !this.showAdminMenu;
      this.showBackdrop = this.showAdminMenu; // Show backdrop when menu is open
    },
    hideMenu() {
      this.showAdminMenu = false;
      this.showBackdrop = false;
    },
    logout() {
      new AccountService().reset()
      this.$router.push({ name: 'sign-in'})
      this.$store.dispatch('setCurrentUser', null);
    },
    selectItem(index) {
        this.selectedIndex = index;
        this.isMenuVisible = false;
      },
    },
};
</script>

<style scoped>

.admin_header {
  display: none;
  padding: 2% 2%;
  background-color: #FFFFFF;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.hide-logo {
  height: 85% !important;
}

.hideMenuList {
  display: none;
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

.images {
  flex-direction: column;
  row-gap: 25px;
}

.adminMobileIcon {
  display: block; /* Ensure the mobile icon is initially visible */
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

.admin_sideBar .widthChange {
  width: 120px;
  text-align: center;
}

.sidebar_img {
  width: 50%;
}

.admin_sideBar li {
  padding: 20px 20px 20px 30px;
  transition: 0.3s ease-in-out;
}

li label .hideMenuList {
  display: none;
}

.admin_sideBar li i {
  margin-right: 8px;
}

.admin_sideBar li:hover {
  background-color: #14457B;
  border-radius: 10px;
}

.selected {
  background-color: #0092ff;
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

#adminMobile {
  display: none;
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
  #adminDesktop {
    display: none;
  }

  #adminMobile {
    display: block;
  }


  .admin_sideBar {
    position: absolute;
    width: 30%;
    top: 0;
    left: -100%;
  }

  .admin_sideBar .cross-icon {
    display: block;
  }


  .backdrop {
    position: absolute;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 100%;
  }

  .backdrop.showBackdrop {
    left: 0;
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

  .sidebar_img{
    height: 65px;
    width: 45%;
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
