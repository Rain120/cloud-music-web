import { flow, types } from 'mobx-state-tree';
import * as recommend from 'src/services/recommend';

export const RecommendStore = types.model('RecommendStore', {
  banners: types.optional(types.array(types.frozen()), []),
  loading: false,
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

  return {
    loadBanner,
  }
});
