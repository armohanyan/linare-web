<template>
  <div class="contact_page">
    <div class="contact_content_header">
      <div class="contact_content_header_color">
        <p>CONTACT US</p>
      </div>
    </div>
    <div class="contact_content">
      <div style="margin: 0 auto; width: 92%">
        <iframe class="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                loading="lazy"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, 14-12 Nersisyani poxoc,Yerevan, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div class="contact_part">
        <div class="contact_info">
          <div class="contact_content_icon">
            <img class="contact_form_icon" src="../../../assets/contact/contact_phone.png" alt="">
            <div>
              <p class="contact_content_heading">Phone</p>
              <p class="contact_content_text">Toll-Free: 0000 - 123 - 456789</p>
              <p class="contact_content_text">Fax: 0000 - 123 - 456789</p>
            </div>
          </div>
          <div class="contact_content_icon">
            <img class="contact_form_icon" src="../../../assets/contact/contact_email.png" alt="">
            <div>
              <p class="contact_content_heading">Email</p>
              <p class="contact_content_text">mail@linare.com</p>
              <p class="contact_content_text">support@linare.com</p>
            </div>
          </div>
          <div class="contact_content_icon">
            <img class="contact_form_icon" src="../../../assets/contact/contact_address.png" alt="">
            <div>
              <p class="contact_content_heading">Address</p>
              <p class="contact_content_text">No: 58 A, East Madison Street</p>
              <p class="contact_content_text">Baltimore, MD, USA 4508</p>
            </div>
          </div>
        </div>

        <div class="contact_form">
          <p class="contact_form_heading">Contact Form</p>
          <div class="forms">
            <input class="contact_form_inputs" placeholder="Name"/>
            <input class="contact_form_inputs" placeholder="Email"/>
            <input class="contact_form_inputs" placeholder="Phone Number"/>
            <textarea style="height: 280px" class="contact_form_inputs" placeholder="Comment"/>
          </div>
          <button class="contact_send_btn">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
}
</script>

<style>

.contact_content_header {
  background-image: url("../../../assets/logos/content_header_img.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 255px;
}

.contact_content_header_color {
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

.map{
  width: 100%;
  height: 600px;
}

.contact_part {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 5%;
}

.contact_content {
  padding: 4% 13%;
}

.contact_form_icon {
  background-color: #2490EB;
  padding: 3%;
  border-radius: 5px;
  height: 60px;
}

.contact_content_icon {
  border: 1px solid #9EA2AF;
  padding: 13% 8%;
  border-radius: 7px;
  display: flex;
  gap: 35px;
  align-items: center;
}

.contact_content_heading {
  color: #2490EB;
  font-weight: 700;
  font-size: 23px;
}

.contact_content_text   {
  color: #9EA2AF;
  font-weight: 600;
  margin: 0 0 5px;
}

.contact_info {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 30%;
}

.contact_form_heading {
  color: #2490EB;
  font-size: 35px;
  font-weight: 600;
}

.contact_form_inputs {
  border-radius: 5px;
  padding: 2%;
  width: 100%;
  border: 2px solid #9EA2AF
}

.forms {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact_send_btn {
  background-color: #2490EB;
  border: none;
  color: white;
  padding: 1.5% 13%;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 5%;
}

::placeholder {
  color: #AAB4D2;
  font-size: 17px;
}

.contact_form{
  width: 60%;
}

@media only screen and (max-width: 1430px) {
  .contact_content{
    padding: 4% 7%;
  }
}

@media only screen and (max-width: 1390px) {
  .contact_info{
    width: 35%;
  }

  .contact_content{
    padding: 4% 4%;
  }

  .contact_content_icon{
    padding: 13% 4%;
    gap: 20px;
  }
}

@media only screen and (max-width: 990px) {
  .contact_part{
    flex-direction: column;
  }

  .contact_info{
    width: 100%;
  }

  .contact_content_icon{
    padding: 4% 4%;
    gap: 35px;
  }

  .contact_form_icon{
    padding: 2%;
  }

  .contact_form{
    width: 100%;
  }
}

@media only screen and (max-width: 990px) {
  .map{
    height: 300px;
  }
}
</style>