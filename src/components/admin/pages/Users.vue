<template>
  <div class="users_page_content container mt-4">
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
            v-model="$v.user.firstName.$model"
            :state="validateState('firstName')"
            type="text"
            placeholder="Firstname"
        ></b-form-input>

        <b-form-invalid-feedback id="firstname">
            <span v-if="!$v.user.firstName.required">
              This is a required field.
            </span>
          <span v-else-if="!$v.user.firstName.minLength">
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
            v-model="$v.user.lastName.$model"
            :state="validateState('lastName')"
            type="text"
            placeholder="Lastname"
        ></b-form-input>

        <b-form-invalid-feedback id="lastname">
            <span v-if="!$v.user.lastName.required">
              This is a required field.
            </span>
          <span v-else-if="!$v.user.lastName.minLength">
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
            v-model="$v.user.phone.$model"
            :state="validateState('phone')"
            type="phone"
            placeholder="Phone"
        ></b-form-input>

        <b-form-invalid-feedback id="phone">
            <span v-if="!$v.user.phone.required">
              This is a required field.
            </span>
          <span v-else-if="!$v.user.phone.minLength">
              Must be at least 9 characters
            </span>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- email -->
      <b-form-group id="email" label="email" label-for="email" class="mt-3">
        <b-form-input
            id="Email"
            v-model="$v.user.email.$model"
            :state="validateState('email')"
            type="text"
            placeholder="Email"
        ></b-form-input>

        <b-form-invalid-feedback id="email">
            <span v-if="!$v.user.email.required">
              This is a required field.
            </span>
          <span v-else-if="!$v.user.email.minLength">
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
            v-model="user.password"
            type="password"
            placeholder="Password"
        ></b-form-input>
        <small class="text-danger" v-if="error">
          {{ error }}
        </small>
      </b-form-group>

      <!-- submit -->
      <div class="mt-4 text-center">
        <b-button type="submit" variant="primary">Create User</b-button>
      </div>
    </b-form>

    <div class="users">
      <div class="users_content">
        <div class="users_desc" v-for="item in users" :key="item.id">
          <div class="d-flex justify-content-end gap-2">
            <button class="icon_btn" @click="deleteUser(item.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <p>id: {{ item.id }}</p>
          <p>email: {{ item.email }}</p>
          <p>firstname: {{ item.firstName }}</p>
          <p>lastname: {{ item.lastName }}</p>
          <p>phone: {{ item.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from "../../../services/UsersService";
import {email, minLength, required} from "vuelidate/lib/validators";

export default {
  name: "AdminUsersPage",

  data() {
    return {
      error: null,
      user: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
      },
      users: []
    }
  },
  watch: {
    user: {
      handler () {
        this.error = null
      },
      deep: true,
    },
  },
  validations: {
    user: {
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
    this.getUsers()
  },

  methods: {
    async getUsers() {
      const { data } = await new UsersService().get()

      this.users = data
    },

    async createUser() {
      if (!this.user.email) return
      if (!this.user.firstName) return
      if (!this.user.lastName) return

      try {
        await new UsersService().post(this.user)

      } catch (err) {
        const error = err.response.data
        if (error.message) {
          this.error = error.message
        } else {
          this.error = `${error.validationError.property}:  ${error.validationError.message}`
        }

        throw err
      }
      await this.getUsers()
    },

    async deleteUser(id) {
      if (!id) return

      await new UsersService().delete(id)

      await this.getUsers()
    },

    validateState (name) {
      const { $dirty, $error } = this.$v.user[name]
      return $dirty ? !$error : null
    },

    onSubmit (event) {
      event.preventDefault()

      if (this.$v.$invalid) {
        this.$v.$touch()
        return false
      } else {
        this.createUser()
      }
    }

  }
};
</script>

<style scoped>

.btn-primary {
  background-color: #2490EB !important;
}

.users_page_content {
  padding: 2%;
}

.admin_users_content {
  padding: 2%;
}

.admin_users {
  border: 2px solid #2490EB;
  border-radius: 7px;
  padding: 2%;
}

.users_message {
  margin-top: 25px;
  width: 100%;
}

.add_users {
  margin-top: 3%;
  border: none;
  border-radius: 5px;
  padding: 1.5% 2%;
  font-size: 18px;
}

.users_desc {
  background-color: #F4F6F9;
  width: 45%;
  font-size: 15px;
  padding: 3%;
  color: #5A6268;
}

.users_content {
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
}

.users_img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  object-fit: cover;
}

.users_img_name {
  display: flex;
  gap: 20px;
  margin-bottom: 4%;
}

.icon_btn {
  border: none;
  background: none;
}
</style>
