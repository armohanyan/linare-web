import axios from 'axios';

const url = process.env.VUE_APP_SERVER_URL + '/testimonials';

class TestimonialsService {

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
        headers: {
          "Content-Type": "multipart/form-data"
        },
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
          headers: {
            "Content-Type": "multipart/form-data"
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
      axios.delete(url  + '/' + id, {
        data: { id },
        withCredentials: true
      })
           .then(res => resolve(res.data))
           .catch(err => reject(err));
    });
  }
}

export default TestimonialsService;
