import axios from 'axios';

const url = process.env.VUE_APP_SERVER_URL + '/categories';

class CategoriesService {

  get() {
    return new Promise((resolve, reject) => {
      axios.get(url)
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }

  post(body) {
    return new Promise((resolve, reject) => {
      axios.post(url, body,{
            withCredentials: true
          },
          { withCredentials: true })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }

  put(body) {
    return new Promise((resolve, reject) => {
      axios.put(
          url + '/' + body.id ,
          body,
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

export default CategoriesService;
