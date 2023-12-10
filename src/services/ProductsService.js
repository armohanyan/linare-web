import axios from 'axios';

const url = process.env.VUE_APP_SERVER_URL + '/products';

class ProductsService {
  get(params) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: params })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
    });
  }

  getProduct(id) {
    return new Promise((resolve, reject) => {
      axios.get(url + '/' + id)
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
          url + '/' + formData.id,
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

export default ProductsService;
