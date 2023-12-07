<template>
  <footer class="footer">
    <div class="footer_content">
      <div>
        <img style="width: 100px" src="../../../assets/logos/med_logo.png" alt=""/>
        <div class="contact_social_icons">
          <div class="contact_icons">
            <a :href="contacts.facebook" target="_blank">
              <img src="../../../assets/social/facebook.png" alt=""/>
            </a>
          </div>
          <div class="contact_icons">
            <a :href="contacts.instagram" target="_blank">
              <img src="../../../assets/social/instagram.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3>Contact Us</h3>
        <div class="text_icons">
          <img class="contact_icon" src="../../../assets/contact/contact_phone.png" alt=""/>
          <span>{{ contacts.phone_1 }}</span>
        </div>
        <div class="text_icons">
          <img class="contact_icon" src="../../../assets/contact/contact_phone.png" alt=""/>
          <span>{{ contacts.phone_2 }}</span>
        </div>
        <div class="text_icons">
          <img src="../../../assets/contact/contact_email.png" alt=""/>
          <span>{{ contacts.email }}</span>
        </div>
        <div class="text_icons">
          <img class="contact_icon" src="../../../assets/contact/contact_location.png" alt=""/>
          <span>{{ contacts.address }}</span>
        </div>
      </div>
    </div>

    <hr />
  </footer>
</template>

<script>
import ContactsService from "../../../services/ContactsService";

export default {
  name: "FooterComponent",
  data() {
    return {
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

  mounted() {
    this.getContacts()
  },

  methods: {
    async getContacts() {
      const contacts = await new ContactsService().get()

      if (contacts?.data?.contacts) {
        this.contacts = contacts?.data?.contacts
      }
    }
  }
}
</script>

<style>
.footer{
  background-color: #14457B;
  color: #FFFFFF;
  padding: 2% 12%;
}

.footer_content {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  align-items: center;
  flex-wrap: wrap;
}

.text_icons {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 7%;
}

.contact_icons {
  background-color: #2C5889;
  width: 55%;
  text-align: center;
  padding: 12%;
  border-radius: 5px;
}

.contact_social_icons {
  display: flex;
  gap: 10px;
  margin-top: 25%;
}
@media only screen and (max-width: 550px) {
  .footer{
    padding: 4% 5%;
  }
}

@media only screen and (max-width: 455px) {
  .contact_icons{
    padding: 7%;
  }

  .contact_social_icons{
    gap: 10px;
  }
}
</style>