import axios from 'axios';

const url = process.env.VUE_APP_SERVER_URL + '/admin/';

class AdminService {

  statics() {
    return new Promise((resolve, reject) => {
      axios.get(url + 'statics', {
        withCredentials: true,
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }

  get() {
    return new Promise((resolve, reject) => {
      axios.get(`${url}current`, {
        withCredentials: true,
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
           .then(res => resolve(res))
           .catch(err => reject(err));
    });
  }

  reset() {
    localStorage.removeItem('accessToken')
  }
}



export default AdminService;
