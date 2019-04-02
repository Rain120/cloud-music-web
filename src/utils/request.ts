/*
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2019-03-22 21:08:19
 * @LastEditTime: 2019-04-02 22:32:29
 */
import axios from 'axios';

// `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.responseType = 'json';
axios.defaults.proxy = {
  host: 'localhost',
  port: 3000,
}

function request (url, method, options = {}) {
  return axios[method](url, options)
    .then(
      response => {
        if (!response.data) {
          throw Error('response is null')
        }
        return response.data
      },
      error => { throw error }
    )
}

export default request;
