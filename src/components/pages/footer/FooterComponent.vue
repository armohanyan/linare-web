<template>
  <footer class="footer">
    <div class="footer_content">
      <div>
        <div class="contact_social_icons">
          <img style="width: 90px" src="../../../assets/logos/linare-logo-white.png" alt=""/>
          <div class="contact_icons">
            <a :href="contacts.facebook" target="_blank">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <div class="contact_icons">
            <a :href="contacts.instagram" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3>Contact Us</h3>
        <div class="text_icons">
          <i class="fa-solid fa-phone"></i>
          <span>{{ contacts.phone_1 }}</span>
        </div>
        <div class="text_icons">
          <i class="fa-solid fa-phone"></i>
          <span>{{ contacts.phone_2 }}</span>
        </div>
        <div class="text_icons">
          <i class="fa-solid fa-envelope"></i>
          <span>{{ contacts.email }}</span>
        </div>
        <div class="text_icons">
          <i class="fa-solid fa-location-dot"></i>
          <span>{{ contacts.address }}</span>
        </div>
      </div>
    </div>

    <hr/>
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

<style scoped>
.footer {
  width: 100%;
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

.fa-facebook-f:before, .fa-instagram:before{
  color: white;
}

@media only screen and (max-width: 550px) {
  .footer {
    padding: 4% 5%;
  }
}

@media only screen and (max-width: 455px) {
  .contact_icons {
    padding: 7%;
  }

  .contact_social_icons {
    gap: 10px;
  }
}
</style>