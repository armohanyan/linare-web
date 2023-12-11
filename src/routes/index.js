import VueRouter from 'vue-router';
import LoginComponent from '@/components/authentication/LoginComponent';
import RegisterComponent from '@/components/authentication/RegisterComponent';
import VerifyEmail from '@/components/authentication/VerifyEmail';
import ResetPassword from '@/components/authentication/ResetPassword';
import Dashboard from "@/components/admin/Dashboard.vue";
import NotFound from "@/app/NotFound.vue";
import LandingPage from "../components/pages/landing/LandingPage.vue";
import AboutPage from "../components/pages/about-us/About.vue";
import ContactPage from "../components/pages/contacts/Contacts.vue";
import ProductPage from "../components/pages/product/Product.vue";
import AdminProducts from "../components/admin/pages/Products.vue";
import Categories from "../components/admin/pages/Categories.vue";
import Testimonials from "../components/admin/pages/Testimonials.vue";
import Contacts from "../components/admin/pages/Contacts.vue";
import Partners from "../components/admin/pages/Partners.vue";
import Products from "../components/pages/products/Products.vue";
import Users from "@/components/admin/pages/Users.vue";
import Settings from "@/components/admin/pages/Settings.vue";
import AccountService from "../services/AccountService";
// import AccountService from "../services/AccountService";

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: '/admin/sign-in',
    name: 'sign-in',
    component: LoginComponent,
    meta: {
      requiresAuth: false,
      userRoute: false
    }
  },
  {
    path: '/admin/sign-up',
    name: 'sign-up',
    component: RegisterComponent,
    meta: {
      requiresAuth: false,
      userRoute: false
    }
  },
  {
    path: '/admin/verify-email', // query email and token
    name: 'verify-email',
    component: VerifyEmail,
    meta:{
      requiresAuth: false,
      userRoute: false
    }
  },
  {
    path: '/admin/on-reset-password',
    name: 'on-reset-password',
    component: ResetPassword,
    meta: {
      requiresAuth: false,
      userRoute: false
    }
  },
  {
    path: '/admin/dashboard',
    component: Dashboard,
    name: 'admin-dashboard',
    meta: {
       requiresAuth: true,
       userRoute: false
    }
  },
  {
    path: '/admin/dashboard/categories',
    component: Categories,
    name: 'admin-categories',
    meta: {
      requiresAuth: true,
      userRoute: false
    }
  },
  {
    path: '/admin/dashboard/products',
    component: AdminProducts,
    name: 'admin-products',
    meta: {
      requiresAuth: true,
      userRoute: false
    }
  },
  {
    path: '/admin/dashboard/contacts',
    component: Contacts,
    name: 'admin-contacts',
    meta: {
      requiresAuth: true,
      userRoute: false
    }
  },
  {
    path: '/admin/dashboard/testimonials',
    component: Testimonials,
    name: 'admin-testimonials',
    meta: {
      requiresAuth: true,
      userRoute: false
    }
  },
  {
    path: '/admin/dashboard/partners',
    component: Partners,
    name: 'admin-partners',
    meta: {
      requiresAuth: true,
      userRoute: false
    }
  },
  {
    path: '/admin/dashboard/users',
    component: Users,
    name: 'admin-users',
    meta: {
      requiresAuth: true,
      userRoute: false
    }
  },
  {
    path: '/admin/dashboard/settings',
    component: Settings,
    name: 'admin-settings',
    meta: {
      requiresAuth: true,
      userRoute: false
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
    meta: {
      requiresAuth: false,
      userRoute: false
    }
  },

  {
    path: '/',
    name: 'home',
    component: LandingPage,
    meta: {
      requiresAuth: false,
      userRoute: true
    }
  },

  {
    path: '/about-us',
    name: 'about-us',
    component: AboutPage,
    meta: {
      requiresAuth: false,
      userRoute: true
    }
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: ContactPage,
    meta: {
      requiresAuth: false,
      userRoute: true
    }
  },

  {
    path: '/products',
    name: 'products',
    component: Products,
    meta: {
      requiresAuth: false,
      userRoute: true
    }
  },

  {
    path: `/product/:id`,
    name: 'product',
    component: ProductPage,
    meta: {
      requiresAuth: false,
      userRoute: true
    }
  },

];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, dfrom, next) => {
  if(to.matched.some(record => record.meta.requiresAdmin)) {
    new AccountService().getCurrent().then(({ data }) => {
      if (data.data.currentAccount.role === "superAdmin"){
        next();
      } else {
        next({
          name: 'home',
        });
      }
    }).catch(() => {
      next({
        path: '/admin/sign-in',
      });
    });
  } else if(to.matched.some(record => record.meta.requiresAuth)) {
    new AccountService().getCurrent().then(() => {
      next();
    }).catch(() => {
      next({
        path: '/admin/sign-in',
      });
    });
  } else {
    next();
  }
});

export default router;
