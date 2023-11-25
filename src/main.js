import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import router from "./routes/index.";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vuelidate from 'vuelidate';
import VueCookies from 'vue-cookies'
import VueEventBus from  "vue-event-bus"
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@fortawesome/fontawesome-free/css/all.css';
import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(require('vue-cookies'))

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCookies)
Vue.use(VueRouter);
Vue.use(VueEventBus)
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

