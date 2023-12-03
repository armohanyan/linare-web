<template>
  <div class="categories_page container mt-4">
    <div class="row">
      <div class="col-md-6">
        <tree-select-component />
      </div>
      <div class="col-md-6">
        <div class="d-flex justify-content-end align-items-center">
          <tree-select-component />
          <div class="ml-3">
            <input class="categories_name" type="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeSelectComponent from "@/components/tree-select-component.vue";

export default {
  name: "AdminCategoriesPage",
  components: { TreeSelectComponent },
};
</script>

<style>
.categories_page {
  padding: 4%;
}

.categories_name {
  border: none;
  border-bottom: 1px solid #C7C7C7;
  padding: 4.5%;
  width: 300px;
  background-color: #F4F4F4;
  margin-left: 20px;
}
</style>
