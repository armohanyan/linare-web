import axios from 'axios';

const url = process.env.VUE_APP_SERVER_URL + '/account/';

class AccountService {

  getCurrent() {
    return new Promise((resolve, reject) => {
      if(localStorage.getItem('accessToken')) {
        this.get()
            .then(account => {
              resolve(account);
            })
            .catch(err => {
              this.reset();
              reject(err);
            });
      } else {
        this.reset();
        reject()
      }
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



export default AccountService;
