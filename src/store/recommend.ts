import { flow, types } from 'mobx-state-tree';
import * as recommend from 'src/services/recommend';

export const RecommendStore = types.model('RecommendStore', {
  loading: types.optional(types.boolean, false),
  banners: types.optional(types.array(types.frozen()), []),
  tags: types.optional(types.array(types.frozen()), []),
  songLists: types.optional(types.frozen(), {}),
  albums: types.optional(types.frozen(), {}),
  rankLists: types.optional(types.array(types.frozen()), []),
})
.views(self => ({}))
.actions(self => {
  const loadBanner = flow(function*() {
    try {
      self.loading = true;
      let response: any = yield recommend.banners();
      if (response.banners) {
        self.banners = response.banners;
        self.loading = false;
      }
    } catch (error) {
      console.log(error);
    }
  });

  const loadTags = flow(function*() {
    try {
      self.loading = true;
      self.tags.clear();
      let response: any = yield recommend.playListCategory();
      if (response.tags) {
        self.tags = response.tags;
        self.loading = false;
      }
    } catch (error) {
      console.log(error);
    }
  });

  const loadSongLists = flow(function*() {
    try {
      self.loading = true;
      let response: any = yield recommend.recommendSongLists();
      if (response) {
        self.songLists = response;
        self.loading = false;
      }
    } catch (error) {
      console.log(error);
    }
  });

  const loadAlbums = flow(function*() {
    try {
      self.loading = true;
      let response: any = yield recommend.newAlbum();
      if (response) {
        self.albums = response;
        self.loading = false;
      }
    } catch (error) {
      console.log(error);
    }
  });

  const loadRankLists = flow(function*() {
    try {
      self.loading = true;
      self.rankLists.clear();
      let response: any = yield recommend.recommendTopLists();
      if (response.list) {
        self.rankLists = response.list;
        self.loading = false;
      }
    } catch (error) {
      console.log(error);
    }
  });

  return {
    loadBanner,
    loadTags,
    loadSongLists,
    loadAlbums,
    loadRankLists,
  }
});
