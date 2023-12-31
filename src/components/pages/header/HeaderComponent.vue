<template>
  <header class="header">
    <router-link to="/" class="menu_item">
      <img style="width: 100px" src="../../../assets/logos/linare-logo-blue.png" alt="Logo"/>
    </router-link>
    <div class="menu_items">
      <div v-for="tab in tabs" :key="tab.value">
        <router-link :to="tab.path" class="menu_item">
          {{ $t('tabs.' + tab.name) }}
        </router-link>
      </div>
      <LanguageComponent />
    </div>
    <div class="menu_burger">
      <div class="burger" @click="toggleMenu">
        <i v-if="!showMenu" class="fa-solid fa-bars"></i>
      </div>

      <MobileHeader ref="mobileHeaderRef" class="admin_mobile_header" :tabs="tabs" :isAdmin="false"/>
    </div>
  </header>
</template>

<script>


import MobileHeader from "@/components/MobileHeader.vue";
import LanguageComponent from "@/components/language/LanguageComponent.vue";

const tabs = [
  {
    label: 'Home',
    path: '/',
    class: 'fa-house',
    name: 'home'
  },
  {
    label: 'Products',
    path: '/products',
    class: 'fa-store',
    name: 'products'
  },
  {
    label: 'About us',
    path: '/about-us',
    class: 'fa-address-card',
    name: 'about-us'
  },
  {
    label: 'Contacts',
    path: '/contacts',
    class: 'fa-id-card-clip',
    name: 'contacts'
  }
]
export default {
  components: {LanguageComponent, MobileHeader},
  data() {
    return {
      showMenu: false,
      tabs: tabs
    };
  },
  methods: {
    toggleMenu() {
      this.$refs.mobileHeaderRef.isMenuVisible = true
      // this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>

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

.header {
  height: 70px;
  width: 100%;
  position: fixed;
  z-index: 9999999;
  padding: 1% 2%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu_items {
  display: flex;
  gap: 30px;
  align-items: center;
}

.menu_item {
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.fa-bars::before {
  font-size: 20px;
}

.menu_item:hover {
  color: #4A9DEF;
}

.burger {
  display: none;
}

.mobile_menu {
  display: none;
  border: 1px solid #ccc;
  position: absolute;
  top: 0;
  right: 0;
  width: 330px;
  height: 100%;
  padding: 7%;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 7px 0 0 7px;
  background-color: #F4F6F9;
}

.menu_burger {
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 768px) {
  .menu_items {
    display: none;
  }

  .burger {
    display: block;
    margin-right: 10px;
  }

  .fa-xmark::before {
    position: absolute;
    z-index: 9999;
    top: 3%;
    width: 30px;
    height: 30px;
    left: 15px;
    font-size: 20px;
  }

  .mobile_menu {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .menu_burger {
    display: block;
  }
}
</style>