<template>
  <header class="header">
    <router-link to="/" class="menu_item">
      <img style="width: 100px" src="../../../assets/logos/linare_logo.png" alt="Logo"/>
    </router-link>
    <div class="menu_items">
      <div v-for="tab in tabs" :key="tab.value">
        <router-link :to="tab.path" class="menu_item">
          {{ tab.label }}
        </router-link>
      </div>
    </div>

    <div class="menu_burger">
      <div class="burger" @click="toggleMenu">
        <i v-if="!showMenu" class="fa-solid fa-bars"></i>
      </div>

      <AdminMobileHeader ref="mobileHeaderRef" class="admin_mobile_header" :tabs="tabs" />

<!--      <transition name="fade">-->
<!--        <div v-if="showMenu" class="mobile_menu">-->
<!--          <i v-if="showMenu" @click="() => showMenu = false" class="fa-solid fa-xmark"></i>-->
<!--          <div class="mt-2">-->
<!--            <div v-for="tab in tabs" :key="tab.value" class="mt-3">-->
<!--              <router-link :to="tab.path" class="menu_item">-->
<!--                {{ tab.label }}-->
<!--              </router-link>-->
<!--            </div>-->
<!--            <LanguageComponent />-->
<!--          </div>-->
<!--        </div>-->
<!--      </transition>-->
    </div>
  </header>
</template>

<script>


import AdminMobileHeader from "@/components/admin/AdminMobileHeader.vue";

const tabs = [
  {
    label: 'Home',
    path: '/',
    class: 'fa-chart-line',
    name: 'dashboard'
  },
  {
    label: 'Products',
    path: '/products',
    class: 'fa-chart-line',
    name: 'products'
  },
  {
    label: 'About us',
    path: '/about-us',
    class: 'fa-chart-line',
    name: 'about-us'
  },
  {
    label: 'Contacts',
    path: '/contacts',
    class: 'fa-chart-line',
    name: 'contacts'
  }
]
export default {
  components: {AdminMobileHeader},
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
  display: none;
}

@media screen and (max-width: 768px) {
  .menu_items {
    display: none;
  }

  .burger {
    display: block;
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
