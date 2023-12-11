<template>
  <div class="users_page_content container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card admin_users_content">
          <div class="card-body admin_users">

            <input type="file" class="form-control mb-3">

            <input v-model="user.position" class="form-control mb-3" type="text" placeholder="Position">

            <div class="form-group users_text">
              <textarea v-model="user.comment" class="form-control users_message" placeholder="Comment"></textarea>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button v-if="!user.id" class="btn btn-primary add_users">Add User</button>
            <button v-if="user.id" class="btn btn-primary add_users">Update User</button>
          </div>
        </div>
      </div>
    </div>

    <div class="users">
      <div class="users_content">
        <div class="users_desc" v-for="item in users" :key="item.id">
          <div class="d-flex justify-content-end gap-2">
            <button class="icon_btn">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button class="icon_btn">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          <div class="users_img_name">
            <img class="users_img" :src="item.avatar" alt=""/>
            <h5>{{ item.position }}</h5>
          </div>
          <p>{{ item.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from "../../../services/UsersService";

export default {
  name: "AdminUsersPage",

  data() {
    return {
      user: {
        avatar: 'https://i.pinimg.com/originals/b7/1f/d1/b71fd13f1ebd496a3bd546284aaa0ad8.jpg',
        position: '',
        comment: ''
      },
      users: [{
        avatar: 'https://i.pinimg.com/originals/b7/1f/d1/b71fd13f1ebd496a3bd546284aaa0ad8.jpg',
        position: 'user',
        comment: 'user'
      }]
    }
  },
  mounted() {
    this.getUsers()
  },

  methods: {
    async getUsers() {
      const { data } = await new UsersService().get()

      this.users = data.users
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
