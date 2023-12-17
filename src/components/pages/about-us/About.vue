<template>
  <div>
    <active-page-template :page="$t('about.about')"/>

    <div class="about_content">
      <div class="about_part">
        <div>
          <div>
            <p class="about_content_heading">{{ $t('about.who_we_are') }}</p>
            <p class="about_content_text">{{ $t('about.create_technology') }}</p>
          </div>
          <div style="margin-top: 4%;">
            <div class="check_with_text" v-for="(item, index) in about" :key="index">
              <i class="check_icon" :class="['fas', item.class]"></i>
              <p class="check_text">{{ $t(item.text) }}</p>
            </div>
          </div>
        </div>
        <div>
          <img class="about_us_img" src="../../../assets/logos/about_us.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div class="services">
      <p class="services_heading">{{ $t('about.main_service') }}</p>
      <div class="about_services">
        <div class="services_content">
          <img src="../../../assets/icons/cardiology_icon.png" alt=""/>
          <p class="service_name">{{ $t('about.cardiology') }}</p>
          <p class="service_desc">{{ $t('about.cardiology_text') }}</p>
        </div>
        <div class="services_content">
          <img src="../../../assets/icons/endocrinology_icon.png" alt=""/>
          <p class="service_name">{{ $t('about.endocrinology') }}</p>
          <p class="service_desc">{{ $t('about.endocrinology_text') }}</p>
        </div>
        <div class="services_content">
          <img style="width: 50px" src="../../../assets/icons/angioplasty_icon.png" alt=""/>
          <p class="service_name">{{ $t('about.angioplasty') }}</p>
          <p class="service_desc">{{ $t('about.angioplasty_text') }}</p>
        </div>
      </div>
    </div>
    <div v-if="testimonials.length" class="testimonials">
      <p class="testimonials_heading">{{ $t('about.happy_to_say') }}</p>
      <div class="testimonials_content">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonials_desc">
          <div class="testimonial_img_name">
            <img class="testimonial_img" :src="testimonial.avatar" alt=""/>
            <h5>{{ testimonial.position }}</h5>
          </div>
          <p>{{ testimonial.comment }}</p>
        </div>
      </div>
    </div>
    <div v-if="collaborators.length" class="partners">
      <div v-for="(collaborator, index) in collaborators" :key="index">
        <img class="about_partner_img" :src="collaborator.logo" alt=""/>
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
      collaborators: [],
      about: [
        {
          class: "fa-check",
          text: "about.about_text1"
        },
        {
          class: "fa-check",
          text: "about.about_text2"
        },
        {
          class: "fa-check",
          text: "about.about_text3"
        },
        {
          class: "fa-check",
          text: "about.about_text4"
        },
        {
          class: "fa-check",
          text: "about.about_text5"
        },
      ]
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
  padding: 2%;
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

.testimonial_img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  object-fit: cover;
}

.testimonial_img_name {
  overflow-x: auto;
  display: flex;
  gap: 20px;
  margin-bottom: 4%;
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
  margin-top: 5px;
}

.testimonials_content {
  display: flex;
  flex-wrap: wrap;
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