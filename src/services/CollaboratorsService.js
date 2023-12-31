import axios from 'axios';

const url = process.env.VUE_APP_SERVER_URL + '/collaborators';

class ContactsService {

  get() {
    return new Promise((resolve, reject) => {
      axios.get(url)
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }

  post(formData) {
    return new Promise((resolve, reject) => {
      axios.post(url, formData,{
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
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
          headers: {
              "Content-Type": "multipart/form-data",
              authorization: 'Bearer ' + localStorage.getItem('accessToken')
          },
            withCredentials: true
          }
      )
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(url + '/' + id, {
        withCredentials: true,
          headers: {
              authorization: 'Bearer ' + localStorage.getItem('accessToken')
          }
      })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }
}

export default ContactsService;
