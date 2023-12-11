<template>
  <div class="settings_page_content container mt-4">
    <b-form @submit="onSubmit">
      <!-- firstname -->
      <b-form-group
          id="Firstname"
          label="Firstname"
          label-for="firstname"
          class="mt-3"
      >
        <b-form-input
            id="firstname"
            v-model="$v.setting.firstName.$model"
            :state="validateState('firstName')"
            type="text"
            placeholder="Firstname"
        ></b-form-input>

        <b-form-invalid-feedback id="firstname">
            <span v-if="!$v.setting.firstName.required">
              This is a required field.
            </span>
          <span v-else-if="!$v.setting.firstName.minLength">
              Must be at least 3 characters
            </span>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- lastname -->
      <b-form-group
          id="lastname"
          label="Lastname"
          label-for="lastname"
          class="mt-3"
      >
        <b-form-input
            id="lastname"
            v-model="$v.setting.lastName.$model"
            :state="validateState('lastName')"
            type="text"
            placeholder="Lastname"
        ></b-form-input>

        <b-form-invalid-feedback id="lastname">
            <span v-if="!$v.setting.lastName.required">
              This is a required field.
            </span>
          <span v-else-if="!$v.setting.lastName.minLength">
              Must be at least 3 characters
            </span>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- phone -->
      <b-form-group
          id="phone"
          label="Phone"
          label-for="phone"
          class="mt-3"
      >
        <b-form-input
            id="phone"
            v-model="$v.setting.phone.$model"
            :state="validateState('phone')"
            type="phone"
            placeholder="Phone"
        ></b-form-input>

        <b-form-invalid-feedback id="phone">
            <span v-if="!$v.setting.phone.required">
              This is a required field.
            </span>
          <span v-else-if="!$v.setting.phone.minLength">
              Must be at least 9 characters
            </span>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- email -->
      <b-form-group id="email" label="email" label-for="email" class="mt-3">
        <b-form-input
            id="Email"
            v-model="$v.setting.email.$model"
            :state="validateState('email')"
            type="text"
            placeholder="Email"
        ></b-form-input>

        <b-form-invalid-feedback id="email">
            <span v-if="!$v.setting.email.required">
              This is a required field.
            </span>
          <span v-else-if="!$v.setting.email.minLength">
              Must be at least 5 characters
            </span>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- password -->
      <b-form-group
          id="Password"
          label="Password"
          label-for="password"
          class="mt-3"
      >
        <b-form-input
            id="password"
            v-model="setting.password"
            type="password"
            placeholder="Password"
        ></b-form-input>
        <small class="text-danger" v-if="error">
          {{ error }}
        </small>
      </b-form-group>

      <!-- submit -->
      <div class="mt-4 text-center">
        <b-button type="submit" variant="primary">Update Settings</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>

import {email, minLength, required} from "vuelidate/lib/validators";
import UsersService from "../../../services/UsersService";

export default {
  name: "AdminSettingsPage",

  data() {
    return {
      error: null,
      setting: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
      }
    }
  },
  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },
  watch: {
    setting: {
      handler () {
        this.error = null
      },
      deep: true,
    },
  },
  validations: {
    setting: {
      email: {
        required,
        email,
        minLength: minLength(5),
      },
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      phone: {
        required,
        minLength: minLength(9),
      },
    },
  },

  mounted() {
    this.getSetting()
  },

  methods: {
    async getSetting() {
      const {data} = await new UsersService().getUser(this.getCurrentUser.id)

      this.setting = data
      this.setting.password = ''
    },

    async updateSettings() {
      if (!this.setting.id) return
      if (!this.setting.email) return
      if (!this.setting.firstName) return
      if (!this.setting.lastName) return

      try {
        await new UsersService().put(this.setting)
      } catch (err) {
        const error = err.response.data
        if (error.message) {
          this.error = error.message
        } else {
          this.error = `${error.validationError.property}:  ${error.validationError.message}`
        }

        throw err
      }

    },
    validateState (name) {
      const { $dirty, $error } = this.$v.setting[name]
      return $dirty ? !$error : null
    },
    onSubmit (event) {
      event.preventDefault()

      if (this.$v.$invalid) {
        this.$v.$touch()
        return false
      } else {
        this.updateSettings()
      }
    }
  },
};
</script>

<style scoped>

.btn-primary {
  background-color: #2490EB !important;
}

.settings_page_content {
  padding: 2%;
}

.admin_settings_content {
  padding: 2%;
}

.admin_settings {
  border: 2px solid #2490EB;
  border-radius: 7px;
  padding: 2%;
}

.settings_message {
  margin-top: 25px;
  width: 100%;
}

.add_settings {
  margin-top: 3%;
  border: none;
  border-radius: 5px;
  padding: 1.5% 2%;
  font-size: 18px;
}

.settings_desc {
  background-color: #F4F6F9;
  width: 45%;
  font-size: 15px;
  padding: 3%;
  color: #5A6268;
}

.settings_content {
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
}

.settings_img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  object-fit: cover;
}

.settings_img_name {
  display: flex;
  gap: 20px;
  margin-bottom: 4%;
}

.icon_btn {
  border: none;
  background: none;
}
</style>
