import request from 'src/utils/request';

export async function banner() {
  await request('/api/banner', 'get');
}
