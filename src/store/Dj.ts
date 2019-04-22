import { types, flow } from 'mobx-state-tree';
import * as djs from 'src/api/dj';

export const DjStore = types
  .model("DjStore", {
    loading: types.boolean,
  })
  .views(self => ({}))
  .actions(self => {
  const load = flow(function*() {
    self.loading = true
    djs.querySublist();
  });
  return {
    load,
  }
});
