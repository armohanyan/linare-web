<template>
  <div class="contact_page">
    <active-page-template page="CONTACTS"/>

    <div class="contact_content">
      <div style="margin: 0 auto; width: 92%">
        <iframe class="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                loading="lazy"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, 14-12 Nersisyani poxoc,Yerevan, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div class="contact_part">
        <div class="contact_info">
          <div class="contact_content_icon">
            <div class="contact_form_icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div>
              <p class="contact_content_heading">{{$t('contacts.phone')}}</p>
              <p class="contact_content_text">{{ this.contacts.phone_1 }}</p>
              <p class="contact_content_text">{{ this.contacts.phone_2 }}</p>
            </div>
          </div>
          <div class="contact_content_icon">
            <div class="contact_form_icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div>
              <p class="contact_content_heading">{{$t('contacts.email')}}</p>
              <p class="contact_content_text">{{ this.contacts.email }}</p>
            </div>
          </div>
          <div class="contact_content_icon">
            <div class="contact_form_icon">
              <i class="fa-solid fa-paper-plane"></i>
            </div>
            <div>
              <p class="contact_content_heading">{{$t('contacts.address')}}</p>
              <p class="contact_content_text">{{ this.contacts.address }}</p>
            </div>
          </div>
        </div>

        <div class="contact_form">
          <p class="contact_form_heading">{{$t('contacts.contacts')}}</p>
          <div class="forms">
            <input v-model="customerMessage.name" type="text" class="contact_form_inputs" placeholder="Name"/>
            <input v-model="customerMessage.email" type="email" class="contact_form_inputs" placeholder="Email"
                   required/>
            <input v-model="customerMessage.phone" type="text" class="contact_form_inputs" placeholder="Phone Number"/>
            <textarea v-model="customerMessage.comment" style="height: 280px" class="contact_form_inputs"
                      placeholder="Comment" required/>
          </div>
          <div class="contact_btn">
            <button class="contact_send_btn" @click="onClickSendEmail">{{$t('contacts.send')}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivePageTemplate from "@/components/pages/active-page-template.vue";
import ContactsService from "../../../services/ContactsService";

export default {
  name: "ContactPage",
  components: {ActivePageTemplate},

  data() {
    return {
      contacts: {
        phone_1: '',
        phone_2: '',
        email: '',
        address: '',
        facebook: '',
        instagram: '',
      },

      customerMessage: {
        name: '',
        email: '',
        phone: '',
        comment: ''
      }
    }
  },

  mounted() {
    this.getContacts()
  },

  methods: {
    async getContacts() {
      const contacts = await new ContactsService().get()
      this.contacts = contacts.data.contacts
    },

    onClickSendEmail() {
      if (!(this.customerMessage.email || this.customerMessage.comment)) return

      new ContactsService().customerSendEmail(this.customerMessage)

      this.customerMessage = {
        name: '',
        email: '',
        phone: '',
        comment: ''
      }
    }
  }
}
</script>

<style scoped>
.map {
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
  padding: 15px 3% 3%;
  text-align: center;
  width: 60px;
  border-radius: 5px;
  height: 60px;
  font-size: 23px;
  color: white;
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

.contact_content_text {
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

.contact_form {
  width: 60%;
}

.contact_btn {
  display: flex;
  justify-content: flex-end;
}

@media only screen and (max-width: 1430px) {
  .contact_content {
    padding: 4% 7%;
  }
}

@media only screen and (max-width: 1390px) {
  .contact_info {
    width: 35%;
  }

  .contact_content {
    padding: 4% 4%;
  }

  .contact_content_icon {
    padding: 13% 4%;
    gap: 20px;
  }
}

@media only screen and (max-width: 990px) {
  .contact_part {
    flex-direction: column;
  }

  .contact_info {
    width: 100%;
  }

  .contact_content_icon {
    padding: 4% 4%;
    gap: 35px;
  }

  .contact_form_icon {
    padding: 13px 2% 2%;
  }

  .contact_form {
    width: 100%;
  }
}

@media only screen and (max-width: 990px) {
  .map {
    height: 300px;
  }
}
</style>