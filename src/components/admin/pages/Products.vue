<template>
<div>
    <div>
      <div class="d-flex justify-content-center mt-5">
        <div class="admin_products col-lg-6">
          <div class="card admin_products_content">
            <div class="card-body admin_products">

              <input type="file" class="form-control mb-3" :disabled="product.images.length > 0"  :key="fileInputKey" multiple @change="previewFiles">

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
import {generateFormData} from "../../../../helper/generateFormData";

export default {
  components: {Treeselect, Products},
  data() {
    return {
      fileInputKey: 0,
      categoriesOptions: [],
      totalCount: 0,
      refresh: true,
      product: {
        title: "",
        images: [],
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
      try {
        if (!this.product.title) return
        if (!this.product.images.length) return

        this.refresh = false

        const formData = generateFormData(this.product)

        for (const i of Object.keys(this.product.images)) {
          formData.append('images', this.product.images[i])
        }

        await new ProductsService().post(formData)

        this.product = {
          title: "",
          price: "",
          shortDescription: "",
          description: "",
          images: [],
          categories: []
        }

        this.fileInputKey++
      } finally {
        this.refresh = true
      }

    },

    async deleteProduct(id) {
      try {
        if (!id) return
        this.refresh = false

        await new ProductsService().delete(id)
      } finally {
        this.refresh = true
      }
    },

    chooseProduct(product) {
      this.product = {...product, categories: product.categories.map(el => el.name)}
    },

    previewFiles(event) {
      this.product.images = event.target.files;
    },

    async updateProduct() {
      try {
        if (!this.product.id) return

        if (!this.product.title) return

        this.refresh = false

        const formData = generateFormData(this.product)

        for (const i of Object.keys(this.product.images)) {
          formData.append('images', this.product.images[i])
        }

        await new ProductsService().put(formData, this.product.id)

        this.product = {
          title: "",
          images: [],
          price: "",
          description: "",
          shortDescription: "",
          categories: []
        }

        this.fileInputKey++
      } finally {
        this.refresh = true
      }
    },
  }
};
</script>

<style>

.btn-primary{
  background-color: #2490EB !important;
}

@media (max-width: 910px) {
  .admin_products{
    width: 85%;
  }

  .card-body{
    width: 100%;
  }
}

</style>
