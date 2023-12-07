<template>
  <div class="menu-wrapper">
    <div class="sidebar-header">
      <div v-if="getCurrentUser">
        <div class="sideBar" :class="{ showMenu: showMenu, widthChange: hideList }">
          <div class="sidebar_images" :class="{ 'images': hideList }">
            <img :class="{ 'hide-logo': hideList }" class="sidebar_img" src="@/assets/logos/sidebar-logo.png" alt=""/>
            <img src="@/assets/dashboard/menu.png" alt="" id="desktop" @click="toggleMenuList" />
            <img src="@/assets/dashboard/menu.png" alt=""  id="mobile" @click="showMenu" />
          </div>
          <ul style="padding-top: 4%; padding-left: 0" :class="{ 'show-icons-only': hideList }">
            <router-link to="/admin/dashboard" :class="{ selected: selectedIndex === 0 }" @click="selectItem(0)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/dashboard.png" alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Dashboard</label></li>
            </router-link>
            <router-link to="/admin/dashboard/categories" :class="{ selected: selectedIndex === 1 }"
                         @click="selectItem(1)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/categories.png" alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Categories</label></li>
            </router-link>
            <router-link to="/admin/dashboard/products" :class="{ selected: selectedIndex === 2 }" @click="selectItem(2)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/product.png" alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Products</label></li>
            </router-link>
            <router-link to="/admin/dashboard/contact" :class="{ selected: selectedIndex === 4 }" @click="selectItem(4)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/contact.png" alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Contact</label></li>
            </router-link>
            <router-link to="/admin/dashboard/testimonials" :class="{ selected: selectedIndex === 5 }"
                         @click="selectItem(5)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/testimonials.png" alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Testimonials</label></li>
            </router-link>

            <router-link to="/admin/dashboard/partners" :class="{ selected: selectedIndex === 5 }"
                         @click="selectItem(5)">
              <li class="lists"><img style="width: 24px; height: 24px" src="@/assets/dashboard/testimonials.png" alt=""/><label
                  class="link_texts" :class="{ hideMenuList: hideList }">Partners</label></li>
            </router-link>
          </ul>
          <span class="cross-icon" @click="hideMenu"><i class="fas fa-times"></i></span>
        </div>
        <div class="backdrop" @click="hideMenu" :class="{ showBackdrop: showBackdrop }"></div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBackdrop: false,
      isMenuVisible: false,
      hideList: false,
      selectedIndex: null,
      menuItems: ["Dashboard", "Categories", "Products", "Contact", "Testimonials"],
    };
  },
  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },
  methods: {
    showMenu() {
      this.isMenuVisible = true;
      this.hideList = false;
      this.showBackdrop = true;
    },
    hideMenu() {
      this.isMenuVisible = false;
      this.showBackdrop = false;
    },
    toggleMenuList() {
      this.hideList = !this.hideList;
    },
    selectItem(index) {
      this.selectedIndex = index;
      this.isMenuVisible = false;
    },
  },
};
</script>

<style>

.hide-logo{
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

a{
  text-decoration: none !important;
}

.link_texts {
  color: white;
  font-size: 23px;
}

.sidebar_images{
  justify-content: space-between;
  display: flex;
  padding: 0 4%;
  align-items: center;
}

.images{
  flex-direction: column;
  row-gap: 25px;
}

.lists {
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
}

.sideBar {
  position: relative;
  z-index: 20;
  height: 100vh;
  width: 400px;
  color: white;
  background-color: #001629;
  transition: 0.3s ease-in-out;
}

.sideBar.widthChange {
  width: 8%;
  text-align: center;
}

.sidebar_img{
  width: 60%;
}

.sideBar li {
  padding: 20px 20px 20px 30px;
  transition: 0.3s ease-in-out;
}

li label .hideMenuList {
  display: none;
}

.sideBar li i {
  margin-right: 8px;
}

.sideBar li:hover {
  background-color: #0092ff;
  border-radius: 10px;
}

.selected {
  background-color: #0092ff;
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

#mobile {
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

.sideBar.showMenu {
  left: 0;
  padding-top: 2%;
  border-radius: 0 15px 15px 0;
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

@media (max-width: 1200px) {
  .sideBar {
    width: 30%;
  }
}

@media (max-width: 900px) {
  #desktop {
    display: none;
  }

  #mobile {
    display: block;
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

  .backdrop {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
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

  #mobile {
    height: 25px;
  }
}

@media (max-width: 320px) {
  .sideBar {
    width: 80%;
  }
}
</style>
