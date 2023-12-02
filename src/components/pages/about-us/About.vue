<template>
  <div>
    <active-page-template page="ABOUT US" />

    <div class="about_content">
      <div class="about_part">
        <div>
          <div>
            <p class="about_content_heading">Who We Are</p>
            <p class="about_content_text">We create advance technology health and social care products</p>
          </div>
          <div style="margin-top: 4%;">
            <div class="check_with_text">
              <img class="check_icon" src="../../../assets/icons/check_icon.png" alt=""/>
              <p class="check_text">Our technology-driven health and social care products are designed to elevate the
                quality of patient care</p>
            </div>
            <div class="check_with_text">
              <img class="check_icon" src="../../../assets/icons/check_icon.png" alt=""/>
              <p class="check_text">Embracing the digital era, our products leverage the power of data and
                connectivity to create intelligent and intuitive solutions.</p>
            </div>
            <div class="check_with_text">
              <img class="check_icon" src="../../../assets/icons/check_icon.png" alt=""/>
              <p class="check_text">We are committed to making advanced health technologies accessible to a wide range
                of users. </p>
            </div>
            <div class="check_with_text">
              <img class="check_icon" src="../../../assets/icons/check_icon.png" alt=""/>
              <p class="check_text">Staying ahead of the curve requires ongoing commitment to research and
                development.</p>
            </div>
            <div class="check_with_text">
              <img class="check_icon" src="../../../assets/icons/check_icon.png" alt=""/>
              <p class="check_text">We recognize the importance of collaboration with healthcare professionals.</p>
            </div>
          </div>
        </div>
        <div>
          <img class="about_us_img" src="../../../assets/logos/about_us.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div class="services">
      <p class="services_heading">Explore Our Main Service</p>
      <div class="about_services">
        <div class="services_content">
          <img src="../../../assets/icons/cardiology_icon.png" alt=""/>
          <p class="service_name">Cardiology</p>
          <p class="service_desc">Cardiology is the branch of medicine that focuses on the study, diagnosis, and
            treatment of disorders related to the heart and the circulatory system. </p>
        </div>
        <div class="services_content">
          <img src="../../../assets/icons/endocrinology_icon.png" alt=""/>
          <p class="service_name">Endocrinology</p>
          <p class="service_desc">
            Endocrinology is a specialized field of medicine that focuses on the study and management of the endocrine
            system, which consists of glands that produce hormones. </p>
        </div>
        <div class="services_content">
          <img style="width: 50px" src="../../../assets/icons/angioplasty_icon.png" alt=""/>
          <p class="service_name">Angioplasty</p>
          <p class="service_desc">Angioplasty is a medical procedure used to treat narrowed or blocked blood vessels,
            typically arteries, by widening the vessel and restoring blood flow. </p>
        </div>
      </div>
    </div>
    <div v-if="testimonials.length" class="testimonials">
      <p class="testimonials_heading">Our Clients Happy To Say About Us</p>
      <div class="testimonials_content">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonials_desc">
          <p>{{ testimonial.comment }}</p>
          <h5>{{ testimonial.position }}</h5>
        </div>
      </div>
    </div>
    <div  v-if="collaborators.length" class="partners">
      <div v-for="(collaborator, index) in collaborators" :key="index">
        <img class="about_partner_img" src="../../../assets/logos/logo1.png" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>

import ActivePageTemplate from "@/components/pages/active-page-template.vue";
import TestimonialsService from "../../../services/TestimonialsService";
import CollaboratorsService from "../../../services/CollaboratorsService";

export default {
  name: "AboutPage",
  components: {ActivePageTemplate},
  data() {
    return {
      testimonials: [],
      collaborators: []
    }
  },

  mounted() {
    this.getTestimonials()
    this.getCollaborators()
  },

  methods: {
    async getTestimonials() {
      const testimonials = await new TestimonialsService().get()
      this.testimonials = testimonials.data.testimonials
    },

    async getCollaborators() {
      const collaborators = await new CollaboratorsService().get()
      this.collaborators = collaborators.data.collaborators
    }
  }
}
</script>

<style>
.about_content_header {
  background-image: url("../../../assets/logos/content_header_img.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
}

.about_content_header_color {
  width: 100%;
  height: 100%;
  background-color: #2E5058;
  opacity: 0.8;
  color: white;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  padding: 80px 4%;
}

.about_content, .testimonials {
  padding: 3% 13%;
}

.about_content_heading {
  color: #2490EB;
  font-size: 30px;
  font-weight: 700;
}

.about_content_text {
  color: #2490EB;
  font-weight: 500;
}

.check_icon {
  background-color: #E7F2F0;
  padding: 0.7%;
  border-radius: 3px;
}

.check_with_text {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 1.5%;
}

.check_text {
  color: #5A6268;
  width: 60%;
  margin: 0;
  font-size: 15px;
}

.services {
  padding: 3% 13%;
  background-color: #F4F6F9;
}

.services_heading, .testimonials_heading {
  color: #2490EB;
  font-size: 30px;
  text-align: center;
  font-weight: 500;
}

.about_partner_img {
  width: 200px;
}

.about_services {
  display: flex;
  justify-content: space-evenly;
}

.services_content {
  background-color: #FFFFFF;
  padding: 3% 2%;
  width: 22%;
}

.services_content:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;
}

.service_name {
  font-weight: 500;
  font-size: 20px;
  margin-top: 5%;
}

.service_desc {
  font-size: 15px;
  color: #5A6268;
}

.partners {
  background-color: #FFFFFF;
  padding: 1% 3%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.testimonials_desc {
  background-color: #F4F6F9;
  width: 30%;
  font-size: 15px;
  padding: 3%;
  color: #5A6268;
}

.testimonials_content {
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
}

.about_part {
  display: flex;
}

.about_us_img {
  width: 90%;
}

@media only screen and (max-width: 1155px) {
  .about_content, .services {
    padding: 3% 7%;
  }

  .services_content {
    width: 26%;
  }

  .check_text {
    width: 72%;
  }

  .testimonials_desc {
    width: 38%;
  }
}

@media only screen and (max-width: 1065px) {
  .about_partner_img {
    width: 150px;
  }
}


@media only screen and (max-width: 950px) {

  .about_services {
    flex-wrap: wrap;
    row-gap: 25px;
  }

  .services_content {
    width: 250px;
  }

  .about_part {
    flex-direction: column-reverse;
    row-gap: 25px;
  }

  .testimonials_desc {
    width: 300px;
  }

  .testimonials_content {
    flex-wrap: wrap;
    row-gap: 25px;
  }

  .about_us_img {
    width: 100%;
  }

  .check_text {
    width: 100%;
  }
}

@media only screen and (max-width: 440px) {
  .services_content {
    width: 285px;
    padding-left: 15px;
  }
}

@media only screen and (max-width: 320px) {
  .about_partner_img {
    width: 130px;
  }
}

</style>