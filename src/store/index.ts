import request from 'src/utils/request';

export async function query() {
  await request('/api/dj/sublist', 'get');
}
