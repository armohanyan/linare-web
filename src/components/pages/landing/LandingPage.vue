<template>
  <div>
    <div class="landing_slide">
      <b-carousel
          id="carousel-fade"
          fade
          indicators
          img-width="100%"
          :interval="5000"
          controls
      >
        <b-carousel-slide v-for="(item, index) in introCarousel" :key="index">
          <template #img>
            <img
                class="d-block img-fluid w-100"
                :src="item.src"
                alt="image slot"
                style="height: 900px; object-fit: cover"
            >
          </template>
          <div class="text_content">
            <div class="slide-left">
              <p>{{ $t(item.title) }}</p>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div v-if="collaborators.length" class="partners_part">
      <div v-for="(collaborator, index) in collaborators" :key="index">
        <img class="partner_img" src="../../../assets/logos/logo1.png" alt="Logo"/>
      </div>
    </div>

    <div class="products">
      <h1 class="products_heading">{{ $t('landing.products') }}</h1>

      <div v-if="products.length" class="card-carousel-wrapper">
        <div class="">
          <div class="card-carousel--overflow-container">
            <div class="card-carousel-cards" :style="{ transform: 'translateX(' + currentOffset + 'px)'}">
              <div class="card-carousel--card" v-for="product in products" :key="product.id">
                <img class="card-carousel-img" :src="product.images[0]" alt=""/>

                <button v-b-modal="'modal-center-' + product.id" class="quick_view">{{ $t('landing.quick_view') }}
                </button>
                <div class="card-carousel--card--footer">
                  <p>{{ product.title }}</p>
                  <p class="price">{{ product.price }}</p>
                </div>

                <b-modal :id="'modal-center-' + product.id" centered>
                  <div class="modal_content">
                    <img class="modal_img" :src="product.images[0]" alt=""/>
                    <div class="modal_info">
                      <p class="modal_img_name">{{ product.title }}</p>
                      <p class="modal_desc">{{ product.shortDescription }}</p>
                      <p class="modal_price">{{ product.price }}</p>

                      <div style="display: flex; gap: 30px; align-items: center">
                        <p class="types">{{ $t('landing.categories') }}</p>
                        <p v-for="(category, index) in product.categories" :key="index" class="modal_type">
                          {{ category.name }}</p>
                      </div>
                      <router-link :to="'/product/' + product.id" class="text-primary btn p-0">
                        <p class="full_details">{{ $t('landing.full_details') }}</p>
                      </router-link>

                    </div>
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        {{ $t('landing.no_data') }}
      </div>
    </div>

    <div class="about">
      <div class="icons_part" v-for="(item, index) in about" :key="index">
        <i class="fa_icons" :class="['fas', item.class]"></i>
        <div>
          <p>{{ $t(item.text1) }}</p>
          <p>{{ $t(item.text2) }}</p>
        </div>
      </div>
    </div>

    <div class="contact_us">
      <h1 class="contact_us_heading">{{ $t('landing.welcome_support') }}</h1>
      <p class="contact_us_text">{{ $t('landing.need_help') }}</p>

      <div class="contact_us_info">
        <i class="fa-solid fa-phone-volume"></i>
        <div class="info_text">
          <div class="info_text_column">
            <div>
              <p>{{ $t('landing.contact_us') }}</p>
              <h2 class="info_heading">{{ $t('landing.doubts') }}</h2>
            </div>
            <div>
              <p>{{ contacts.phone_1 }}</p>
              <p>{{ contacts.phone_2 }}</p>
            </div>
          </div>
          <button class="know_more">{{ $t('landing.know_more') }}</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import ContactsService from "../../../services/ContactsService";
import CollaboratorsService from "../../../services/CollaboratorsService";
import ProductsService from "../../../services/ProductsService";

const introCarousel = [
  {
    src: 'https://www.niso.com.tr/wp-content/uploads/2023/03/hardware_SD.jpg',
    title: 'landing.carousel_text1'
  },
  {
    src: 'https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/workforce-feature.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=xrYKAvV0',
    title: 'landing.carousel_text2'
  },
  {
    src: 'https://img.freepik.com/premium-photo/doctor-hold-icon-health-electronic-medical-record-interface-digital-healthcare-network_34200-712.jpg',
    title: 'landing.carousel_text3'
  }
]

const about = [
  {
    class: "fa-hotel",
    text1: "landing.helpline",
    text2: "landing.till_end"
  },
  {
    class: "fa-truck-fast",
    text1: "landing.free_shipping",
    text2: "landing.orders"
  },
  {
    class: "fa-percent",
    text1: "landing.discounts",
    text2: "landing.save_big"
  }
]

export default {
  name: "LandingPage",
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      collaborators: [],
      introCarousel,
      about,
      products: [],
      contacts: {
        phone_1: '',
        phone_2: '',
        email: '',
        address: '',
        facebook: '',
        instagram: '',
      }
    }
  },

  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.products.length - this.windowSize);
    },

    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },

  mounted() {
    this.getContacts()
    this.getCollaborators()
    this.getProducts()
  },

  methods: {
    moveCarousel(direction) {
      console.log(direction)
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },

    async getProducts() {
      const products = await new ProductsService().get({
        page: 1,
        limit: 6
      })
      this.products = products.data.products
    },

    async getContacts() {
      const contacts = await new ContactsService().get()
      if (contacts.data?.contacts) {
        this.contacts = contacts.data.contacts
      }
    },

    async getCollaborators() {
      const collaborators = await new CollaboratorsService().get()
      this.collaborators = collaborators.data.collaborators
    }
  }
}
</script>

<style scoped>
>>> .sr-only {
  display: none;
}

.text_content {
  width: 100%;
}

>>> .carousel-caption {
  position: absolute;
  right: unset !important;
  top: 22% !important;
  left: 15% !important;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: start !important;
  width: 25% !important;
}

.img-fluid {
  object-fit: cover;
  height: 700px;
}

.slide-left {
  width: 100%;
  animation: 3s slide-left;
  text-align: center;
}

.slide-left > p {
  font-size: 50px;
  text-align: center;
  font-weight: 500;
  color: #14457B;
}

@keyframes slide-left {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0;
  }
}

>>> .carousel-control-prev {
  opacity: 1 !important;
}

>>> .carousel-control-next {
  opacity: 1 !important;
}

>>> .carousel-control-prev-icon {
  background-color: #2490EB;
  border-radius: 3px;
  height: 2.5rem !important;
  width: 2.5rem !important;
}

>>> .carousel-control-next-icon {
  background-color: #2490EB;
  border-radius: 3px;
  height: 2.5rem !important;
  width: 2.5rem !important;
}

.modal_info {
  margin-top: 3%;
  width: 59%;
}

.partners_part {
  background-color: #14457B;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.fa_icons {
  font-size: 25px;
}

.products {
  padding: 3%;
  text-align: center;
}

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 78%;
}

.card-carousel--overflow-container {
  overflow: hidden;
}

.card-carousel--nav__left, .card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}

.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}

.card-carousel--nav__left {
  transform: rotate(-135deg);
}

.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}

.card-carousel--nav__right {
  transform: rotate(45deg);
}

.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

.card-carousel-cards .card-carousel--card {
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin: 0 10px 2px;
}

.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}

.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}

.card-carousel-img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  width: 280px;
}

.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}

.card-carousel-cards .card-carousel--card--footer {
  padding: 10%;
  background-color: #86BFEB;
  border-top: 0;
}

.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0 0 2px;
  font-size: 19px;
  font-weight: 500;
  color: #FFFFFF;
  user-select: none;
}

.card-carousel-cards .card-carousel--card--footer p.price {
  font-size: 15px;
  font-weight: 500;
  padding: 4px;
  margin-left: 4px;
  color: #FFFFFF;
}

.partner_img {
  width: 200px;
}

.products_heading {
  color: #2490EB;
  font-size: 40px;
  padding-bottom: 2%;
}

.about {
  background-color: #86BFEB;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  justify-content: space-evenly;
}

.icons_part {
  display: flex;
  gap: 20px;
  color: #FFFFFF;
  font-weight: 500;
  align-items: center;
}

.icons_part > div > p {
  margin: 0;
}

.contact_us {
  padding: 3%;
  text-align: center;
}

.contact_us_heading {
  color: #1C8DEA;
  font-weight: 500;
}

.contact_us_text {
  color: #949494;
  font-weight: 500;
  padding-top: 1%;
  font-size: 20px;
}

.contact_us_info {
  padding: 2%;
  border: 2px solid #C7C7C7;
  width: 35%;
  border-radius: 15px;
  margin: 4% auto 0;
  display: flex;
  gap: 30px;
  align-items: center;
}

.info_text {
  text-align: start;
  color: #3F3F3F;
}

.info_text_column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 7%;
}

.info_text > div > div > p {
  margin: 0;
}

.know_more {
  background-color: #2490EB;
  color: #ffffff;
  border: none;
  padding: 0.7%;
  border-radius: 5px;
  font-weight: 500;
  position: absolute;
  margin-top: 0.5%;
  width: 10%;
}

.quick_view {
  width: 100%;
  border-radius: unset;
  background-color: #2490EB;
  color: white;
  padding: 3% 0;
  transform: translate(0%, 0%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border: none;
}

.card-carousel--card:hover .quick_view {
  opacity: 1;
}

>>> .modal-dialog {
  max-width: 50% !important;
}

>>> .modal-footer {
  display: none !important;
}

.modal_img {
  width: 45%;
}

.modal_content {
  display: flex;
  gap: 20px;
}

.modal_img_name {
  color: #2490EB;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10%;
}

.modal_price {
  font-size: 22px;
  color: #2490EB;
  font-weight: 500;
}

.modal_desc {
  color: #9EA7A8;
  font-weight: 500;
  margin-bottom: 4%;
}

.types {
  color: #2490EB;
  font-weight: 500;
  font-size: 17px;
}

.modal_type {
  color: #A2A2A2;
}

.full_details {
  color: #575757;
  margin-top: 3%;
}

>>> .modal-body {
  padding-bottom: 5% !important;
  padding-top: 0 !important;
}

>>> .modal-header {
  border-bottom: unset !important;
}

>>> .close {
  border: none;
  background-color: #2490EB;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  width: 25px;
  text-align: center;
}

.fa-phone-volume::before {
  font-size: 35px;
}

@media only screen and (max-width: 1635px) {
  .slide-left > p {
    font-size: 40px;
  }
}

@media only screen and (max-width: 1315px) {
  .modal_content {
    flex-direction: column;
    overflow-y: auto;
    max-height: 373px;
  }

  .modal_img {
    width: 55%;
    margin: 0 auto;
  }

  .modal_info {
    width: 100%;
    padding-left: 3%;
  }

  .modal_img_name {
    margin-bottom: 4%;
  }

  >>> .carousel-caption {
    width: 50% !important;
  }
}

@media only screen and (max-width: 1195px) {
  .info_heading {
    font-size: 22px;
  }

  .info_text_column {
    font-size: 17px;
  }
}

@media only screen and (max-width: 1065px) {
  .partner_img {
    width: 150px;
  }
}

@media only screen and (max-width: 920px) {
  .know_more {
    width: 15%;
  }

  .contact_us_info {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}

@media only screen and (max-width: 885px) {
  .contact_us_info {
    padding: 2% 7%;
    width: 100%;
    flex-direction: unset;
    align-items: center;
    gap: 30px;
  }

  .know_more {
    width: auto;
    padding: 1.5% 8%;
  }

  .contact_us {
    padding: 7% 4%;
  }

  .img-fluid {
    height: 550px !important;
  }
}

@media only screen and (max-width: 815px) {
  >>> .modal-dialog {
    max-width: 100% !important;
  }

  .modal_content {
    max-height: 450px;
  }
}

@media only screen and (max-width: 655px) {
  .slide-left > p {
    font-size: 30px;
    margin-top: 8%;
  }
}

@media only screen and (max-width: 495px) {
  .slide-left > p {
    font-size: 25px;
    max-height: 20%;
  }

  >>> .carousel-caption {
    width: 73% !important;
  }

  .about {
    row-gap: 20px;
    padding: 3%;
  }

  .contact_us {
    padding: 10% 4%;
  }

  .contact_us_heading {
    font-size: 25px;
  }

  .contact_us_text {
    display: none;
  }

  .contact_us_text {
    font-size: 17px;
  }
}

@media only screen and (max-width: 320px) {
  .partner_img {
    width: 130px;
  }
}
</style>