
import request from 'src/utils/request';

export async function querySublist() {
  await request('/api/dj/sublist', 'get');
}
