<template>
  <div class="testimonials_page_content container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card admin_testimonials_content">
          <div class="card-body admin_testimonials">

            <input type="file" onfocusin="" class="form-control mb-3"  @change="previewFiles">

            <input v-model="partner.name" class="form-control mb-3" type="text" placeholder="Name">

            <div class="form-group testimonials_text">
              <textarea v-model="partner.description" class="form-control testimonial_message" placeholder="Description"></textarea>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button  v-if="!partner.id" class="btn btn-primary add_testimonials" @click="createPartner()">Add Partner</button>
            <button  v-if="partner.id" class="btn btn-primary add_testimonials" @click="updatePartner()">Update Partner</button>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonials">
      <div class="testimonials_content">
        <div class="testimonials_desc" v-for="item in partners" :key="item.id">
          <div class="d-flex justify-content-end">
            <button class="icon_btn" @click="deletePartners(item.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button class="icon_btn" @click="choosePartner(item)">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          <div class="testimonial_img_name">
            <img class="testimonial_img" :src="item.logo" alt=""/>
            <h5>{{ item.name}}</h5>
          </div>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CollaboratorsService from "../../../services/CollaboratorsService";
import {generateFormData} from "../../../../helper/generateFormData";

export default {
  name: "AdminPartnersPage",

  data() {
    return {
      file: [],
      partner: {
        logo: 'https://i.pinimg.com/originals/b7/1f/d1/b71fd13f1ebd496a3bd546284aaa0ad8.jpg',
        name: '',
        description: ''
      },
      partners: []
    }
  },

  mounted() {
    this.getPartners()
  },

  methods: {
    async getPartners() {
      const {data} = await new CollaboratorsService().get()

      this.partners = data.collaborators
    },

    async createPartner() {
      if (!this.partner.name) return

      const formData = generateFormData(this.partner)

      await new CollaboratorsService().post(formData)

      this.partner = {
          logo: '',
          name: '',
          description: ''
      }

      await this.getPartners()
    },

    async deletePartners(id) {
      if (!id) return

      await new CollaboratorsService().delete(id)

      await this.getPartners()
    },

    choosePartner(partner) {
      this.partner = {...partner}
    },

    previewFiles(event) {
      this.partner.logo = event.target.files[0];
    },

    async updatePartner() {
      if (!this.partner.id) return
      if (!this.partner.name) return

      const formData = generateFormData(this.partner)
      await new CollaboratorsService().put(formData)

      this.partner = {
        logo: '',
        name: '',
        description: ''
      }

      await this.getPartners()
    }

  }
};
</script>

<style scoped>

.btn-primary{
  background-color: #2490EB !important;
}

.testimonials_page_content {
  padding: 2%;
}

.admin_testimonials_content {
  padding: 2%;
}

.admin_testimonials {
  border: 2px solid #2490EB;
  border-radius: 7px;
  padding: 2%;
}

.testimonial_message {
  margin-top: 25px;
  width: 100%;
}

.add_testimonials {
  margin-top: 3%;
  border: none;
  border-radius: 5px;
  padding: 1.5% 2%;
  font-size: 18px;
}

.testimonials_desc {
  background-color: #F4F6F9;
  width: 420px;
  font-size: 15px;
  padding: 3%;
  color: #5A6268;
}

.testimonials_content {
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
  row-gap: 10px;
}

.testimonial_img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  object-fit: cover;
}

.testimonial_img_name {
  display: flex;
  gap: 20px;
  margin-bottom: 4%;
}

.icon_btn{
  border: none;
  background: none;
}
</style>
