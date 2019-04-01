import { flow, types } from 'mobx-state-tree';
import * as recommend from 'src/services/recommend';

export const RecommendStore = types.model('RecommendStore', {
  banners: types.frozen(),
  loading: false,
})
.views(self => ({}))
.actions(self => {
  const getBanner = flow(function*() {
    self.banners.clear();
    try {
      self.loading = true;
      recommend.banner().then((response: any) => {
        if (response.banners) {
          self.banners = response.banners;
          self.loading = false;
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  return {
    getBanner,
  }
});
