import VueRouter from 'vue-router';
import PostComponent from '@/components/body/PostComponent.vue';
import CreatePostComponent from '@/components/body/CreatePostComponent.vue';
import LoginComponent from '@/components/authentication/LoginComponent';
import RegisterComponent from '@/components/authentication/RegisterComponent';
import VerifyEmail from '@/components/authentication/VerifyEmail';
import ResetPassword from '@/components/authentication/ResetPassword';
import AccountService from '@/services/AccountService';
import UpdatePostComponent from '@/components/body/UpdatePostComponent';
import SinglePost from '@/components/body/SinglePost';
import Dashboard from "@/components/admin/Dashboard.vue";
import NotFound from "@/app/NotFound.vue";
import Categories from "@/components/admin/pages/Categories.vue";
import Products from "@/components/admin/pages/Products.vue";
import About from "@/components/admin/pages/About.vue";
import Contact from "@/components/admin/pages/Contact.vue";
import Testimonials from "@/components/admin/pages/Testimonials.vue";

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: LoginComponent
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: RegisterComponent,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/verify-email', // query email and token
    name: 'verify-email',
    component: VerifyEmail,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/on-reset-password',
    name: 'on-reset-password',
    component: ResetPassword,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/admin/dashboard',
    component: Dashboard,
    name: 'adminDashboard'
  },
  {
    path: '/admin/dashboard/categories',
    component: Categories,
    name: 'adminDashboardCategories'
  },
  {
    path: '/admin/dashboard/products',
    component: Products,
    name: 'adminDashboardProducts'
  },
  {
    path: '/admin/dashboard/about',
    component: About,
    name: 'adminDashboardAbout'
  },
  {
    path: '/admin/dashboard/contact',
    component: Contact,
    name: 'adminDashboardContact'
  },
  {
    path: '/admin/dashboard/testimonials',
    component: Testimonials,
    name: 'adminDashboardTestimonials'
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    name: 'home',
    component: PostComponent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePostComponent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/update/:id',
    name: 'update-post',
    component: UpdatePostComponent,
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/show/:id',
    name: 'show',
    component: SinglePost,
    meta: {
      requiresAuth: true
    }
  }

];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {

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
        path: '/sign-in',
      });
    });
  } else if(to.matched.some(record => record.meta.requiresAuth)) {
    new AccountService().getCurrent().then(() => {
      next();
    }).catch(() => {
      next({
        path: '/sign-in',
      });
    });
  } else {
    next();
  }
});

export default router;
