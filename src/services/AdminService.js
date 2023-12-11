import axios from 'axios';
import Cookie from 'js-cookie';

const url = process.env.VUE_APP_SERVER_URL + '/admin/';

class AdminService {

  statics() {
    return new Promise((resolve, reject) => {
      axios.get(url + 'statics', {
        withCredentials: true
      })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }

  get() {
    return new Promise((resolve, reject) => {
      axios.get(`${url}current`, {
        withCredentials: true
      })
           .then(res => resolve(res))
           .catch(err => reject(err));
    });
  }

  reset() {
    Cookie.remove("accessToken")
  }
}



export default AdminService;
