<template>
  <header class="header">
    <a class="menu_item" href="/"><img style="width: 100px" src="../../../assets/logos/med_logo.png" alt="" /></a>

    <div class="menu_items">
      <div v-for="tab in tabs" :key="tab.value">
        <a :href="tab.path" class="menu_item">{{ tab.label }}</a>
      </div>
    </div>
    <div>
      <div class="burger" @click="toggleMenu">
        <img v-if="!showMenu" class="menu_icon" src="../../../assets/icons/menu_icon.png" alt="" />
      </div>
      <transition name="fade">
        <div v-if="showMenu" class="mobile_menu">
          <img v-if="showMenu" class="close_icon" src="../../../assets/icons/close_icon.png" alt="" @click="() => showMenu = false" />
          <div class="mt-2">
            <div v-for="tab in tabs" :key="tab.value" class="mt-3">
              <a :href="tab.path" class="menu_item">{{ tab.label }}</a>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </header>
</template>

<script>

const  tabs = [
  {
    label: 'HOME',
    path: '/'
  },
  {
    label: 'PRODUCTS',
    path: '/all-products'
  },
  {
    label: 'ABOUT US',
    path: '/about-us'
  },
  {
    label: 'CONTACT',
    path: '/contacts'
  }
]
export default {
  data() {
    return {
      showMenu: false,
      tabs: tabs
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>

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

@media screen and (max-width: 768px) {
  .menu_items {
    display: none;
  }

  .burger {
    display: block;
  }

  .close_icon{
    position: absolute;
    z-index: 9999;
    top: 3%;
  }

  .mobile_menu {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
