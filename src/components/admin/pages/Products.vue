<template>
<div>
    <div>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card admin_products_content">
            <div class="card-body admin_products">

              <input type="file" class="form-control mb-3">

              <input v-model="product.title" class="form-control mb-3" type="text" placeholder="Name">

              <input v-model="product.price" class="form-control mb-3" type="text" placeholder="Price">

              <input v-model="product.shortDescription" class="form-control mb-3" type="text" placeholder="Short Description">

              <div class="form-group products_text">
                <textarea v-model="product.description" class="form-control testimonial_message" placeholder="Description"></textarea>
              </div>

              <div class="mt-2">
                Select Categories

                <treeselect  v-model="product.categories"  :multiple="true" :options="categoriesOptions"/>
              </div>

              <div class="d-flex justify-content-end mt-3">
                <button v-if="!product.id" class="btn btn-primary add_testimonials" @click="createProduct()">Add Product</button>
                <button v-if="product.id" class="btn btn-primary add_testimonials" @click="updateProduct()">Update Product</button>
              </div>
            </div>

            <div class="d-flex justify-content-end">
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="mt-2">
    <products
        v-if="refresh"
        admin
        @selectProduct="chooseProduct"
        @deleteProduct="deleteProduct"
    />
  </div>
</div>
</template>

<script>
import Products from "../../pages/products/Products.vue";
import ProductsService from "../../../services/ProductsService";
import Treeselect from "@riophae/vue-treeselect";
import CategoriesService from "../../../services/CategoriesService";

export default {
  components: {Treeselect, Products},
  data() {
    return {
      categoriesOptions: [],
      refresh: true,
      product: {
        title: "",
        images: ["https://meds-theme.myshopify.com/cdn/shop/collections/shop-26.jpg?v=1591863371&width=535"],
        price: "",
        description: "",
        shortDescription: "",
        categories: []
      },
      products: []
    };
  },

  mounted() {
    this.getCategories()
  },

  methods: {
    async getCategories() {
      const { data } = await new CategoriesService().get()

      this.categoriesOptions = data.map(el => {
        return {
          id: el.name,
          label: el.name,
          data: el
        }
      })
    },

    async createProduct() {
      console.log(this.product)
      if (!this.product.title) return

      this.refresh = false
      await new ProductsService().post(this.product)

      this.product = {
        title: "",
        images: ["https://meds-theme.myshopify.com/cdn/shop/collections/shop-26.jpg?v=1591863371&width=535"],
        price: "",
        shortDescription: "",
        description: "",
        categories: []
      }

      this.refresh = true
    },

    async deleteProduct(id) {

      if (!id) return
      this.refresh = false

      await new ProductsService().delete(id)

      this.refresh = true
    },

    chooseProduct(product) {
      this.product = {...product, categories: product.categories.map(el => el.name)}
    },

    async updateProduct() {
      console.log(this.product)
      if (!this.product.id) return

      if (!this.product.title) return

      this.refresh = false

      await new ProductsService().put(this.product)

      this.product = {
        title: "",
        images: ["https://meds-theme.myshopify.com/cdn/shop/collections/shop-26.jpg?v=1591863371&width=535"],
        price: "",
        description: "",
        shortDescription: "",
        categories: []
      }

      this.refresh = true
    },

    showMsgBoxTwo() {
      this.boxTwo = ''
      this.$bvModal.msgBoxConfirm('Please confirm that you want to delete everything.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Delete',
        cancelTitle: 'Cancel',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
};
</script>

<style>
.admin_add_delete_products{
  display: flex;
  gap: 20px;
}

.admin_product_page{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  row-gap: 20px;
}

.create_products_modal{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.create_products{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.product_inputs{
  border: none;
  border-bottom: 1px solid #C7C7C7;
  background-color: #F4F4F4;
  padding: 2%;
}

table#table-transition-example .flip-list-move {
  transition: transform 1s !important;
}

.table {
  width: 50% !important;
}

.table-sm > :not(caption) > * > * {
  padding: 1rem 2rem !important;
}

thead > tr {
  background-color: #2490EB;
  color: white;
}

.modal-dialog-centered {
  justify-content: center !important;
}

.modal-footer {
  display: flex !important;
}

.close {
  border: none;
  background: no-repeat;
  font-size: 25px;
}

.modal-sm {
  max-width: 330px !important;
}

.modal-body{
  padding: 2rem !important;
}

</style>
