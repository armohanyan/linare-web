<template>
  <div>
    <active-page-template page="PRODUCT" />

    <div class="product_container">
      <div class="product_info">
        <div>
          <div class="slider">
            <div class="slides" :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }">
              <div v-for="(image, index) in images" :key="index" class="slide">
                <img :src="image" alt="Slide" style="width: 100%;">
              </div>
            </div>
          </div>
          <div class="thumbnail-container">
            <img v-for="(image, index) in images" :key="index" :src="image" alt="Thumbnail" @click="changeSlide(index)"
                 class="thumbnail" :class="{ active: index === currentIndex }">
          </div>
        </div>
        <div class="product_content_info">
          <p class="product_img_name">N99 Face Mask</p>
          <p class="product_desc">The N99 face mask is a high-performance respiratory protective device designed to
            filter out 99% of airborne particles, including dust, pollutants, and microorganisms.</p>
          <p class="product_price">Rs. 329.00</p>
          <div style="display: flex; gap: 30px; align-items: center">
            <p class="product_type_text">Type</p>
            <p class="product_type">Personal Care</p>
          </div>
        </div>
      </div>
      <div style="margin-top: 5%">
        <button class="desc_btn">Description</button>
        <div class="desc_content">
          <p>
            Everyday life for humans includes the use of medications. In order to monitor their health and take
            precautions, there are numerous products available. For the purpose of assessing a patient's health, certain
            things are used in hospitals
          </p>
          <p class="desc_heading">
            Blood Pressure Monitor:
          </p>
          <p>
            One of the numerous measures that are crucial for keeping track of your health is your blood pressure. This
            blood pressure monitor is fully automated; you only need to press the start button to receive accurate
            readings in under a minute. Seniors may use the large LCD panel with ease because of its crisp reading
            capabilities and easy readability for people with poor vision
          </p>
          <p class="desc_heading">
            Features:
          </p>
          <ul>
            <li>Fully Automatic</li>
            <li>accurate and reliable</li>
            <li>Get your readings on a large LCD screen.</li>
            <li>turn off automatically after 30 seconds of inactivity.</li>
          </ul>
          <p class="desc_heading">
            Benefits:
          </p>
          <ul>
            <li>Rapid confirmation of the diagnosis of hypertension</li>
            <li>Check your blood pressure outside of a hospital to see whether it changes.</li>
            <li>Reduced medication use in the white coat effect</li>
            <li>Improved adherence to drug therapy</li>
            <li>improves the prediction of cardiovascular prognosis.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductPage",

  data() {
    return {
      images: [
        'https://meds-theme.myshopify.com/cdn/shop/products/shop-6_b9b77d21-9dc9-4d4c-a509-ca327a8aa345.jpg?v=1590486089&width=713',
        'https://meds-theme.myshopify.com/cdn/shop/files/img22.1.jpg?v=1682492560&width=1946',
        'https://meds-theme.myshopify.com/cdn/shop/files/img22.2.jpg?v=1682492559&width=1946',
        'https://meds-theme.myshopify.com/cdn/shop/files/img22.3.jpg?v=1682492559&width=1946'
      ],
      currentIndex: 0,
    };
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
    },
  },
}
</script>

<style>
.product_container {
  padding: 3% 13%;
}

.product_info {
  display: flex;
  gap: 20px;
}

.product_img_name {
  color: #2490EB;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10%;
}

.product_price {
  font-size: 22px;
  color: #2490EB;
  font-weight: 500;
}

.product_desc {
  width: 600px;
  color: #9EA7A8;
  font-weight: 500;
  margin-bottom: 4%;
}

.product_type_text {
  color: #2490EB;
  font-weight: 500;
  font-size: 17px;
}

.product_type {
  color: #A2A2A2;
}

.slider {
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.thumbnail-container {
  margin-top: 10px;
}

.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  margin: 0 5px;
  border: 2px solid #ddd;
  border-radius: 5px;
}

.thumbnail.active {
  border-color: #3498db;
}

.desc_btn {
  background-color: #2490EB;
  border: none;
  color: white;
  padding: 0.7% 1.6%;
  border-radius: 5px 5px 0 0;
  font-weight: 500;
}

.desc_content {
  border: 1px solid #DDDDDD;
  border-radius: 0 7px 7px 7px;
  padding: 2%;
  width: 85%;
  color: #9EA7A8;
}

.desc_heading {
  color: #2490EB;
  font-weight: 500;
  margin-top: 3%;
}

.product_content_info{
  width: 59%;
  margin-top: 7%;
}

@media only screen and (max-width: 1500px) {
  .product_container{
    padding: 3% 5%;
  }
}

@media only screen and (max-width: 1180px) {
  .product_info{
    flex-direction: column;
  }

  .desc_content{
    width: 100%;
  }

  .product_content_info{
    width: 100%;
  }

  .product_desc{
    width: 100%;
    font-size: 22px;
  }

  .product_img_name{
    margin-bottom: 5%;
    font-size: 30px;
  }
}
</style>