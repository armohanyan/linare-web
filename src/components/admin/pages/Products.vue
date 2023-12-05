<template>
<div class="admin_product_page">
  <div class="admin_add_delete_products">
    <tree-select-component/>
    <b-button @click="showMsgBoxTwo" variant="danger">Delete</b-button>
    <b-button v-b-modal.modal-center variant="primary">Add Product</b-button>
    <div class="product_modal">
      <b-modal style="width: 40% !important;" id="modal-center" centered title="Add Product">
        <div class="create_products_modal">
          <div class="create_products">
            <label>Product Name</label>
            <input type="text" class="product_inputs "/>
          </div>
          <div class="create_products">
            <label>Product Price</label>
            <input type="text" class="product_inputs"/>
          </div>
          <div class="create_products">
            <label>Product Description</label>
            <input type="text" class="product_inputs"/>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
  <b-table
      id="table-transition-example"
      :items="items"
      :fields="fields"
      striped
      small
      primary-key="Name"
      :tbody-transition-props="transProps"
  >
    <template v-slot:cell(Action)="data">
      <img v-b-modal="'modal-center-' + data.item.Name" v-if="data.value === ''" src="@/assets/admin_panel/edit.png"
           alt="Icon" width="20" height="20"
           style="cursor: pointer; margin-right: 10%"/>
      <img @click="showMsgBoxTwo" v-if="data.value === ''" src="@/assets/admin_panel/delete.png"
           alt="Icon" width="20" height="20" style="cursor: pointer"/>
      <div class="product_modal">
        <b-modal style="width: 40% !important;" :id="'modal-center-' + data.item.Name" centered title="Edit Product">
          <div class="create_products_modal">
            <div class="create_products">
              <label>Product Name</label>
              <input type="text" class="product_inputs "/>
            </div>
            <div class="create_products">
              <label>Product Price</label>
              <input type="text" class="product_inputs"/>
            </div>
            <div class="create_products">
              <label>Product Description</label>
              <input type="text" class="product_inputs"/>
            </div>
          </div>
        </b-modal>
      </div>
    </template>
  </b-table>
</div>
</template>

<script>

import TreeSelectComponent from "@/components/tree-select-component.vue";

export default {
  components: {TreeSelectComponent},
  data() {
    return {
      transProps: {
        name: 'flip-list',
        boxTwo: ''
      },
      items: [
        {Name: "N99 Face Mask", Price: 'Rs. 329.00', Description: 'N99 Face Mask', Action: ''},
        {Name: "Ear Thermometer", Price: 'Rs. 6.98', Description: 'Ear Thermometer', Action: ''},
        {Name: "Velit PPE Kit", Price: 'Rs.167.00', Description: 'Velit PPE Kit',  Action: ''},
        {Name: "Wet Wipes", Price: 'Rs. 90.87', Description: 'Wet Wipes', Action: ''}
      ],
      fields: [
        {key: 'Name', sortable: true},
        {key: 'Price', sortable: true},
        {key: 'Description', sortable: true},
        {key: 'Type', sortable: true},
        {key: 'Action', sortable: true}
      ]
    };
  },

  methods: {
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
