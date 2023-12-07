<template>
  <div class="categories_page mt-4 card-body w-50">
      <div class="col-md-6">
        <categories-tree-select  v-if="refresh" class="w-75" ref="categoriesRef" @onChangeValue="onChangeValue" />
      </div>
      <div class="mt-3">
        <div>
          Create Category
        </div>
          <div>
            <input v-model="category.name" class="form-control mb-3" type="text" placeholder="Name">

            <div class="form-group testimonials_text">
              <textarea  v-model="category.description" class="form-control testimonial_message" placeholder="Description"></textarea>
            </div>
          </div>

          <div class="mt-3 gap-2 d-flex">
            <button v-if="!category.id" type="button" class="btn btn-primary" @click="createCategory()">Save</button>
            <button v-if="category.id" type="button" class="btn btn-primary" @click="updateCategory()">Update</button>
            <button v-if="category.id" type="button" class="btn btn-danger" @click="deleteCategory">Delete</button>
          </div>
      </div>
    </div>
</template>

<script>
import CategoriesTreeSelect from "../../categories-tree-select.vue";
import CategoriesService from "../../../services/CategoriesService";

export default {
  name: "AdminCategoriesPage",
  components: { CategoriesTreeSelect },

  data() {
    return {
      selectedCategory: '',
      refresh: true,
      category: {
        name: '',
        description: ''
      }
    }
  },

  methods: {
    onChangeValue(category) {
      this.category = {...category.data}
    },

    async updateCategory() {
      this.refresh = false

      if (!this.category.name) return
      await new CategoriesService().put(this.category)

      this.category = {
        name: '',
        description: ''
      }

      this.refresh = true
    },

    async deleteCategory() {
      this.refresh = false

      if (!this.category.id) return

      await new CategoriesService().delete(this.category.id)

      this.category = {
        name: '',
        description: ''
      }

      this.refresh = true
    },

    async createCategory() {
      this.refresh = false

      if (!this.category.name) return
      await new CategoriesService().post(this.category)

      this.category = {
        name: '',
        description: ''
      }

      this.refresh = true
    }
  }
};
</script>

<style>

.categories_name {
  border: #a29b9b 1px solid;
  border-radius: 5px;
  padding: 10px;
  width: 480px;
}
</style>
