<template>
  <b-container class="sign_in_form mt-5">
    <div>
      <div class="text-center"><h3>Sign in</h3></div>
      <b-form @submit.prevent="onSubmit">
        <!-- email -->
        <b-form-group id="email" label="Email" label-for="input-1">
          <b-form-input
              id="email"
              v-model="$v.form.email.$model"
              :state="validateState('email')"
              type="email"
              placeholder="Email"
          ></b-form-input>

          <b-form-invalid-feedback id="email">
          <span v-if="!$v.form.email.required">
            This is a required field.
          </span>
            <span v-else-if="!$v.form.email.minLength">
            Must be at least 5 characters
          </span>
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- password -->
        <b-form-group
            id="password"
            label="Password"
            label-for="password"
            class="mt-3"
        >
          <b-form-input
              id="password"
              v-model="$v.form.password.$model"
              :state="validateState('password')"
              type="password"
              placeholder="Password"
          ></b-form-input>

          <b-form-invalid-feedback id="password">
          <span v-if="!$v.form.password.required">
            This is a required field.
          </span>
            <span v-else-if="!$v.form.password.minLength">
            Must be at least 6 characters
          </span>
          </b-form-invalid-feedback>
        </b-form-group>
        <div>
          <small class="text-danger" v-if="error">
            {{ error }}
          </small>
        </div>
        <div class="mt-4 text-center">
          <b-button type="submit" variant="primary">Submit</b-button>
        </div>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
import AuthService from '../../services/AuthService';
import { validationMixin } from 'vuelidate';

export default {
  mixins: [validationMixin],
  data() {
    return {
      error: null,
      loading: false,
      showEmailVerificationMessage: false,
      emailVerificationErrorMessage: '',
      form: {
        email: '',
        password: ''
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
        minLength: minLength(5)
      },
      password: {
        required,
        minLength: minLength(1)
      }
    }
  },
  watch: {
    form: {
      handler() {
        this.error = null;
      },
      deep: true
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      if(this.$v.$invalid) {
        this.$v.$touch();
        return false;
      } else {
        this.login();
      }
    },
    login() {
      new AuthService().signIn(this.form)
                       .then(({ data }) => {
                         this.$store.dispatch('setCurrentUser', data.data.user);
                         this.$router.push({ name: 'admin-dashboard' });
                       })
                       .catch((err) => {
                         const data = err.response.data;

                         if(data.message) {
                           this.error = data.message;
                         } else {
                           this.error = `${data.validationError.property}:  ${data.validationError.message}`;
                         }
                         throw err;
                       });
    }
  }
};
</script>

<style scoped>
  .sign_in_form{
    width: 450px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    padding: 30px;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }

  @media (max-width: 490px) {
    .sign_in_form{
      width: 90%;
    }
  }
</style>
