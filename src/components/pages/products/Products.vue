<template>
  <div class="product_page">

    <active-page-template v-if="!admin" page="PRODUCTS"/>

    <div class="product_content" :class="admin ? 'p-3' : ''">
      <div class="grid_content">
        <div class="filter_products">
          <div class="filter_category_text">
            <p class="filter_text">
              Filter by category
            </p>
            <div>
              <categories-tree-select @onChangeValue="onChangeCategory"/>
            </div>
          </div>
        </div>
        <div class="grid_part">
          <button class="grids" @click="toggleGrid('two-cards-per-row')">
            <img src="@/assets/grid/2_vertical_grid.png" alt=""/>
          </button>
          <button class="grids" @click="toggleGrid('three-cards-per-row')">
            <img src="@/assets/grid/3_vertical_grid.png" alt=""/>
          </button>
          <button class="grids" @click="toggleGrid">
            <img style="width: 24px" src="@/assets/grid/4_vertical_grid.png" alt=""/>
          </button>
        </div>
      </div>
      <div class="product_cards" :class="currentGridClass">
        <div class="card-product--card" v-for="product in products" :key="product.id">
          <div v-if="admin" class="d-flex justify-content-end">
            <div class="d-flex justify-content-end gap-2">
              <button class="icon_btn" @click="deleteProduct(product.id)">
                <img class="test_close_icon" src="@/assets/admin_panel/delete.png" alt="" />
              </button>
              <button class="icon_btn" @click="chooseProduct(product)">
                <img class="test_close_icon" src="@/assets/admin_panel/edit.png" alt="" />
              </button>
            </div>
          </div>
          <a :href="'/product/' + product.id"><img class="card-product-img" :src="product.images[0]" alt=""/></a>
          <div class="card-product--card--footer">
            <p>{{ product.title }}</p>
            <p class="product-price">{{ product.price }}</p>
          </div>
        </div>

        <div v-if="!products.length">
          Products not found
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivePageTemplate from "@/components/pages/active-page-template.vue";
import ProductsService from "../../../services/ProductsService";
import CategoriesTreeSelect from "../../categories-tree-select.vue";

export default {
  name: "Products",
  components: {CategoriesTreeSelect, ActivePageTemplate},

  props: {
    admin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      products: [],
      currentGridClass: 'product_cards',
    }
  },


  mounted() {
    this.getProducts()
  },

  methods: {
    toggleGrid(gridType) {
      this.currentGridClass = gridType;
    },

    async getProducts() {
      const products = await new ProductsService().get()
      this.products = products.data.products
    },

    async getProductsFiltertedByCategory(categoryName) {
      const products = await new ProductsService().get({category: categoryName})
      this.products = products.data.products
    },

    onChangeCategory(value) {
      if (value) {
        this.getProductsFiltertedByCategory(value.name)
      } else {
        this.getProducts()
      }
    },

    chooseProduct(product) {
      this.$emit('selectProduct', product)
    },

    deleteProduct(id) {
      this.$emit('deleteProduct', id)
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

.filter_products {
  width: 450px;
}

.grids {
  border: none;
  background-color: #2490EB;
  padding: 5%;
  border-radius: 5px;
}

.filter_text {
  font-size: 17px;
  font-weight: 600;
  color: #2490EB;
  margin-bottom: 0;
}

.grid_part {
  width: 24%;
  height: 55px;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

.btn-group > .btn {
  background-color: #2490EB !important;
  border: none !important;
  padding: 11% 31%;
  gap: 35px;
  display: flex;
  align-items: center;
  font-weight: 600;
}

.filter_category_text {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.icon_btn{
  border: none;
  background: none;
}

.test_close_icon{
  width: 30px;
  height: 30px;
}

@media only screen and (max-width: 1245px) {
  .product_content {
    padding: 3% 5%;
  }
}

@media only screen and (max-width: 1020px) {
  .grid_part{
    display: none;
  }
}

@media only screen and (max-width: 510px) {
  .filter_category_text {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    row-gap: 10px;
  }

  .grid_content{
    padding: 3%;
  }
}

</style>