import axios from 'axios';

const url = process.env.VUE_APP_SERVER_URL + '/users';

class UserService {

  get() {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        withCredentials: true
      })
           .then(res => resolve(res.data))
           .catch(err => reject(err));
    });
  }

  post(formData) {
    return new Promise((resolve, reject) => {
      axios.post(url, formData,{
        withCredentials: true
      },
        { withCredentials: true })
           .then(res => resolve(res.data))
           .catch(err => reject(err));
    });
  }

  getUser(id) {
    return new Promise((resolve, reject) => {
      axios.get(url + '/' + id, {
        withCredentials: true
      })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }

  put(formData) {
    return new Promise((resolve, reject) => {
      axios.put(
        url,
        formData,
        {
          withCredentials: true
        }
      )
           .then(res => resolve(res.data))
           .catch(err => reject(err));
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(url  + '/' + id, {
        data: { id },
        withCredentials: true
      })
           .then(res => resolve(res.data))
           .catch(err => reject(err));
    });
  }
}

export default UserService;
