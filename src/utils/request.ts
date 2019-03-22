import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

const serviceUrl = 'localhost:6666';

function request (url, method, options = {}) {
  return axios[method](serviceUrl + url, options)
    .then(
      response => {
        if (response.data.code !== 200) {
          throw Error(response.data)
        }
        return response.data.result
      },
      error => { throw error }
    )
}

export default request;
