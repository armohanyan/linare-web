<template>
  <div class="contact_page_content container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card admin_forms">
          <div class="card-body">
            <h2 class="card-title admin_contact_form_heading">Contact Form</h2>
              <div class="mb-3">
                <input v-model="contacts.phone_1" type="text" class="form-control admin_contact_form_inputs" placeholder="Phone Number">
              </div>

              <div class="mb-3">
                <input v-model="contacts.phone_2" type="text" class="form-control admin_contact_form_inputs" placeholder="Fax - Phone Number">
              </div>

              <div class="mb-3">
                <input v-model="contacts.email" type="email" class="form-control admin_contact_form_inputs" placeholder="Email">
              </div>

              <div class="mb-3">
                <input v-model="contacts.address" type="text" class="form-control admin_contact_form_inputs" placeholder="Address">
              </div>

            <div class="mb-3">
              <input v-model="contacts.facebook" type="text" class="form-control admin_contact_form_inputs" placeholder="Facebook">
            </div>

            <div class="mb-3">
              <input v-model="contacts.instagram" type="text" class="form-control admin_contact_form_inputs" placeholder="Instagram">
            </div>

              <div class="d-flex justify-content-end">
                <button  v-if="contacts.id" type="button" class="btn btn-primary admin_contact_send_btn"  @click="updateContacts">Update</button>
                <button v-if="!contacts.id" type="button" class="btn btn-primary admin_contact_send_btn" @click="createContact">Create</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesService from "../../../services/CategoriesService";
import ContactsService from "../../../services/ContactsService";

export default {
  name: "AdminContactsPage",

  data() {
    return {
      contacts: {
        id: '',
        phone_1: '',
        phone_2: '',
        email: '',
        address: '',
        facebook: '',
        instagram: '',
      }
    }
  },

  mounted() {
    this.getContacts()
  },

  methods: {
    async getContacts() {
      const { data } = await new ContactsService().get()

      if (data.contacts) {
        this.contacts = data.contacts
      }

    },
    async updateContacts() {
      await new ContactsService().put(this.contacts)
    },

    async createContact() {
      await new CategoriesService().post(this.category)

      this.getContacts()
    }
  }
};
</script>

<style scoped>
.contact_page_content {
  padding: 2%;
}

.admin_contact_form_heading {
  color: #2490EB;
  font-size: 35px;
  font-weight: 600;
  text-align: start;
  margin-bottom: 3%;
}

.admin_contact_form_inputs {
  border-radius: 5px;
  padding: 2%;
  border: 2px solid #9EA2AF;
}

.admin_forms {
  gap: 30px;
}

.admin_contact_send_btn {
  width: 30%;
  padding: 1% 4%;
}
</style>
