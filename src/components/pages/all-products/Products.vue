<template>
  <div class="product_page">

    <active-page-template page="PRODUCTS" />

    <div class="product_content">
      <div class="grid_content">
        <div style="width: 13%;">
          <b-dropdown id="dropdown-1" text="Sort by" class="m-md-2">
            <b-dropdown-item style="border-bottom: 1px solid #9A9A9A;">Price, low to high</b-dropdown-item>
            <b-dropdown-item style="border-bottom: 1px solid #9A9A9A;">Price, high to low</b-dropdown-item>
            <b-dropdown-item style="border-bottom: 1px solid #9A9A9A;">Alphabetically, A-Z</b-dropdown-item>
            <b-dropdown-item>Alphabetically, Z-A</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="grid_part">
          <button class="grids" @click="toggleGrid('two-cards-per-row')"><img src="@/assets/grid/2_vertical_grid.png" alt=""/></button>
          <button class="grids"  @click="toggleGrid('three-cards-per-row')"><img src="@/assets/grid/3_vertical_grid.png" alt=""/></button>
          <button class="grids" @click="toggleGrid"><img style="width: 24px" src="@/assets/grid/4_vertical_grid.png" alt=""/></button>
        </div>
      </div>
      <div class="product_cards"  :class="currentGridClass">
        <div class="card-product--card" v-for="item in items" :key="item.id">
          <a href="/product"><img class="card-product-img" :src="item.image" alt=""/></a>
          <div class="card-product--card--footer">
            <p>{{ item.name }}</p>
            <p class="product-price" v-for="(price, index) in item.price" :key="price" :class="index">{{ price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivePageTemplate from "@/components/pages/active-page-template.vue";

export default {
  name: "AllProductsPage",
  components: {ActivePageTemplate},

  data() {
    return {
      items: [
        {
          id: 1,
          name: ' N99 Face Mask',
          image: 'https://meds-theme.myshopify.com/cdn/shop/collections/shop-26.jpg?v=1591863371&width=535',
          price: ["Rs. 329.00"],
          desc: '\n' +
              'The N99 face mask is a high-performance respiratory protective device designed to filter out 99% of airborne particles, including dust, pollutants, and microorganisms.',
          type: "Personal Care"
        },
        {
          id: 2,
          name: 'Ear Thermometer',
          image: 'https://meds-theme.myshopify.com/cdn/shop/products/shop-11_b1ce8946-cef2-41db-a40e-d5bd87ba611a.jpg?v=1590486085&width=535',
          price: ["Rs. 6.98"],
          desc: "The ear thermometer is a compact and user-friendly medical instrument that provides a quick and non-invasive way to measure body temperature.",
          type: "Health Care"
        },
        {
          id: 3,
          name: 'Velit PPE Kit',
          image: 'https://meds-theme.myshopify.com/cdn/shop/products/shop-24_55e7aa8f-77f1-43f8-a0ef-cbcc99641f4d.jpg?v=1590486122&width=535',
          price: ["Rs.167.00"],
          desc: "The Velit PPE Kit is a comprehensive and essential set designed to provide individuals with a comprehensive layer of protection against potential health hazards.",
          type: "Personal Care"
        },
        {
          id: 4,
          name: 'Wet Wipes',
          image: 'https://meds-theme.myshopify.com/cdn/shop/collections/shop-1.jpg?v=1591685978&width=535',
          price: ["Rs. 90.87"],
          desc: '\n' +
              'Wet wipes are pre-moistened disposable cloths designed for various personal and household hygiene purposes.',
          type: "Personal Care"
        },
        {
          id: 5,
          name: 'Stethoscope',
          image: 'https://meds-theme.myshopify.com/cdn/shop/products/shop-6_b9b77d21-9dc9-4d4c-a509-ca327a8aa345.jpg?v=1590486089&width=535',
          price: ["Rs. 23.00"],
          desc: "A stethoscope is an essential medical instrument used by healthcare professionals, particularly doctors and nurses, to listen to internal sounds of the body, primarily the heart and lungs.",
          type: "Health Care"
        },
        {
          id: 6,
          name: 'Forehead Thermometer',
          image: 'https://meds-theme.myshopify.com/cdn/shop/products/shop-2.jpg?v=1590486098&width=535',
          price: ["Rs. 90.00"],
          desc: "A forehead thermometer is a non-contact, infrared thermometer designed to measure body temperature by scanning the temporal artery on the forehead.",
          type: "Health Care"
        }
      ],
      currentGridClass: 'product_cards',
    }
  },

  methods: {
    toggleGrid(gridType) {
      this.currentGridClass = gridType;
    },
  },
}
</script>

<style>

.one-card-per-row .card-product--card {
  width: 100%;
}

.two-cards-per-row .card-product--card {
  width: 48%;
}

.three-cards-per-row .card-product--card {
  width: 30%;
}

.product_content {
  padding: 3% 13%;
}

.grid_content {
  background-color: #E9E9E9;
  padding: 1%;
  display: flex;
  justify-content: space-between;
}

.grid_icon1_btn {
  background-color: #2490EB;
  border: none;
  border-radius: 5px 0 0 5px;
}

.grid_icon2_btn {
  border: none;
  background-color: #ffffff;
  border-radius: 0 5px 5px 0;
  padding: 4% 7%;
}

.grids {
  border: none;
  background-color: #2490EB;
  padding: 5%;
  border-radius: 5px;
}

.grid_part {
  width: 24%;
  height: 55px;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

.btn-group > .btn, .show > .btn-secondary.dropdown-toggle {
  background-color: #2490EB !important;
  border: none !important;
  padding: 11% 31%;
  gap: 35px;
  display: flex;
  align-items: center;
  font-weight: 600;
}

.dropdown-item {
  padding: 6% 8% !important;
  color: #9A9A9A !important;
  font-weight: 500 !important;
}

.dropdown-menu {
  padding: 0 !important;
}

.dropdown-menu.show {
  border-radius: 8px;
  will-change: transform;
  border: none;
  box-shadow: 0 0 10px #1a1a1a26;
  margin-top: 8%;
}

.card-product--card {
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin: 0 10px 2px;
  width: 285px;
}

.card-product-img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  width: 100%;
}

.card-product--card--footer {
  padding: 10%;
  background-color: #86BFEB;
  border-top: 0;
  text-align: center;
}

.card-product--card--footer p {
  padding: 3px 0;
  margin: 0 0 2px;
  font-size: 19px;
  font-weight: 500;
  color: #FFFFFF;
  user-select: none;
}

.card-product--card--footer p.product-price {
  font-size: 15px;
  font-weight: 500;
  padding: 4px;
  margin-left: 4px;
  color: #FFFFFF;
}

.product_cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  margin-top: 6%;
}

.grid_btns{
  width: 15%;
  text-align: center;
}

@media only screen and (max-width: 1245px) {
  .product_content{
    padding: 3% 5%;
  }
}

@media only screen and (max-width: 1020px) {
  .grid_part, .grid_btns{
    display: none;
  }
}
</style>