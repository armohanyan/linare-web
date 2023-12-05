<template>
  <treeselect
      :options="options"
      v-model="value"
      :normalizer="normalizer"
  />
</template>
<script>

import Treeselect from "@riophae/vue-treeselect";
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import CategoriesService from "../services/CategoriesService";

export default {
  components: {Treeselect},

  data() {
    return {
      value: null,
      options: [
        {
          key: 'test',
          name: 'test'
        },
        {
          key: 'test 1',
          name: 'test 1',
        }
      ],
    }
  },
  watch: {
    value: function () {
      this.$emit('onChangeValue', this.value)
    }
  },

  mounted() {
    this.getCategories()
  },
  methods: {
    normalizer(node) {
      return {
        id: node.key,
        label: node.name,
        children: node.subOptions,
      }
    },

    async getCategories() {
      const { data } = await new CategoriesService().get()

      this.options = data.map(el => {
        return {
          key: el.name,
          name: el.name
        }
      })
    }
  }
}
</script>

<style>
.vue-treeselect {
  width: 300px;
  font-size: 20px;
}

.vue-treeselect__multi-value-item {
  font-size: 14px;
}

.vue-treeselect__control {
  height: 50px;
}

.vue-treeselect div{
  padding-top: 1%;
}
</style>