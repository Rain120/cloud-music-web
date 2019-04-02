import request from 'src/utils/request';

// 可选参数 : countrycode: 国家码，用于国外手机号登陆，例如美国传入：1
export async function loginByPhone(data) {
  return await request(`/api/login/cellphone`, 'post', data);
}

export async function loginByEmail({ phone, password }) {
  return await request(`/api/login?phone=${phone}&password=${password}`, 'get');
}

export async function logout() {
  return await request('/api/logout', 'get');
}


export async function loginRefresh() {
  return await request('/api/login/refresh', 'get');
}

export async function loginStatus() {
  return await request('/api/login/status', 'get');
}

export async function userDetail(uid) {
  return await request(`/user/detail?uid=${uid}`, 'get');
}
