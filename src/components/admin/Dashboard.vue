<template>
  <div class="dashboard_page container-fluid d-flex justify-content-center flex-wrap mt-5">
    <div class="dashboard_content" v-for="item in dashItems" :key="item.id">
        <div class="dashboard_items">
          <div class="dashboard_img_text">
            <div class="dashboard_img">
              <img width="27" height="27" :src="item.src" alt=""/>
            </div>
            <div>
              <p class="dashboard_items_name">{{ item.name }}</p>
              <p class="dashboard_items_count">{{item.count}}</p>
            </div>
          </div>
          <hr />
        </div>
    </div>
  </div>
</template>

<script>

import AdminService from "../../services/AdminService";

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      dashItems: [
        {
          name: "Products",
          count: 5,
          src: "https://img.icons8.com/ios-filled/50/FFFFFF/product.png"
        },

        {
          name: "Testimonials",
          count: 3,
          src: "https://img.icons8.com/external-prettycons-solid-prettycons/60/FFFFFF/external-testimonial-user-interface-vol-3-prettycons-solid-prettycons.png"
        },

        {
          name: "Partners",
          count: 8,
          src: "https://img.icons8.com/ios/50/FFFFFF/collaborating-in-circle.png"
        },

        {
          name: "Categories",
          count: 13,
          src: "https://img.icons8.com/ios-filled/50/FFFFFF/opened-folder.png"
        },
      ]
    }
  },

  computed: {
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },

  mounted() {
    this.getStatics()
  },

  methods: {
    async getStatics() {
      const { data } = await new AdminService().statics()


      this.dashItems.forEach(item => {
        if (item.name === 'Products') {
          item.count = data.products
        }

        if (item.name === 'Categories') {
          item.count = data.categories
        }

        if (item.name === 'Testimonials') {
          item.count = data.testimonials
        }

        if (item.name === 'Partners') {
          item.count = data.partners
        }

        if (item.name === 'Products') {
          item.count = data.products
        }
      })
    }
  }
}
</script>

<style scoped>

.dashboard_page {
  padding: 5% 2%;
  gap: 30px;
  row-gap: 60px;
}

.dashboard_content {
  width: 400px;
}

.dashboard_items {
  box-shadow: 0 8px 24px 0 rgba(140, 149, 159, 0.2);
  padding: 10% 2%;
  width: 400px;
}

.dashboard_img {
  background-color: #2490EB;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  margin-top: -55px;
  margin-left: 10px;
  text-align: center;
  padding-top: 5.5%;
}

.dashboard_img_text{
  display: flex;
  justify-content: space-between;
}

.dashboard_items_count{
  text-align: end;
  font-size: 20px;
  font-weight: 600;
}

.dashboard_items_name{
  font-size: 24px;
  font-weight: 600;
}

@media (max-width: 450px) {
  .dashboard_content {
    width:300px;
  }

  .dashboard_items {
    width: 300px;
  }
}
</style>