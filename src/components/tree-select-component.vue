<template>
  <treeselect v-model="value" :multiple="true" :options="options"/>
</template>
<script>

import Treeselect from "@riophae/vue-treeselect";
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  components: {Treeselect},

  data() {
    return {
      value: null,
      options: [{
        id: 'Product',
        label: 'Product',
        children: [{
          id: 'Personal Care',
          label: 'Personal Care',
        }, {
          id: 'Health Care',
          label: 'Health Care',
        }],
      }],
    }
  },
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