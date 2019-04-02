import request from 'src/utils/request';

// 可获取 banner( 轮播图 ) 数据
export async function banners() {
  return await request('/api/banner', 'get');
}
/**
 * 可获取新碟上架列表
 * limit: 取出数量 , 默认为 50
 * offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 */
export async function newAlbum(data) {
  return await request('/api/top/album', 'post', data);
}

//  可获取推荐 mv
export async function recommendMV() {
  return await request('/api/personalized/mv', 'get');
}

// 可获取推荐歌单
export async function recommendSongLists() {
  return await request('/api/personalized', 'get');
}

// 可获取推荐新音乐
export async function recommendNewSong() {
  return await request('/api/personalized/newsong', 'get');
}

// 可获取推荐电台
export async function recommendDj() {
  return await request('/api/personalized/djprogram', 'get');
}

// 可获取推荐电台
export async function recommendProgram() {
  return await request('/api/program/recommend', 'get');
}

/**
 * @param idx 传入数字 idx, 可获取不同排行榜
 * 0: 云音乐新歌榜,
 * 1: 云音乐热歌榜,
 * 2: 网易原创歌曲榜,
 * 3: 云音乐飙升榜,
 * 4: 云音乐电音榜,
 * 5: UK排行榜周榜,
 * 6: 美国Billboard周榜
 * 7: KTV嗨榜,
 * 8: iTunes榜,
 * 9: Hit FM Top榜,
 * 10: 日本Oricon周榜
 * 11: 韩国Melon排行榜周榜,
 * 12: 韩国Mnet排行榜周榜,
 * 13: 韩国Melon原声周榜,
 * 14: 中国TOP排行榜(港台榜),
 * 15: 中国TOP排行榜(内地榜)
 * 16: 香港电台中文歌曲龙虎榜,
 * 17: 华语金曲榜,
 * 18: 中国嘻哈榜,
 * 19: 法国 NRJ EuroHot 30周榜,
 * 20: 台湾Hito排行榜,
 * 21: Beatport全球电子舞曲榜,
 * 22: 云音乐ACG音乐榜,
 * 23: 云音乐嘻哈榜
 */
export async function recommendRankLists(idx) {
  return await request(`/api/top/list?idx=${idx}`, 'get');
}

// 可获取所有榜单
export async function recommendTopLists() {
  return await request(`/api/toplist`, 'get');
}

// 可获取所有榜单内容摘要
export async function recommendTopListsDetail() {
  return await request(`/api/toplist/detail`, 'get');
}
