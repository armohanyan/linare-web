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
            withCredentials: true
          },
          { withCredentials: true })
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
      axios.delete(url + '/' + id, {
        withCredentials: true
      })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }
}

export default ContactsService;
