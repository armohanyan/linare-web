<template>
  <div class="settings_page_content container mt-4">
    <b-form @submit="onSubmit" class="settings_form">
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
      <b-form-group id="email" label="Email" label-for="email" class="mt-3">
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
      console.log(data)
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

.settings_form{
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 30px;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.btn-primary {
  background-color: #2490EB !important;
}

.settings_page_content {
  padding: 2%;
}
</style>
