<template>
  <div class="settings_page_content container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card admin_settings_content">
          <div class="card-body admin_settings">

            <input type="file" class="form-control mb-3">

            <input v-model="setting.position" class="form-control mb-3" type="text" placeholder="Position">

            <div class="form-group settings_text">
              <textarea v-model="setting.comment" class="form-control settings_message" placeholder="Comment"></textarea>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button v-if="!setting.id" class="btn btn-primary add_settings">Add Setting</button>
            <button v-if="setting.id" class="btn btn-primary add_settings">Update Setting</button>
          </div>
        </div>
      </div>
    </div>

    <div class="settings">
      <div class="settings_content">
        <div class="settings_desc" v-for="item in settings" :key="item.id">
          <div class="d-flex justify-content-end gap-2">
            <button class="icon_btn">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button class="icon_btn">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          <div class="settings_img_name">
            <img class="settings_img" :src="item.avatar" alt=""/>
            <h5>{{ item.position }}</h5>
          </div>
          <p>{{ item.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AdminSettingsPage",

  data() {
    return {
      setting: {
        avatar: 'https://i.pinimg.com/originals/b7/1f/d1/b71fd13f1ebd496a3bd546284aaa0ad8.jpg',
        position: '',
        comment: ''
      },
      settings: [{
        avatar: 'https://i.pinimg.com/originals/b7/1f/d1/b71fd13f1ebd496a3bd546284aaa0ad8.jpg',
        position: 'setting',
        comment: 'setting'
      }]
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
