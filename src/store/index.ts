import { types } from 'mobx-state-tree';
import { RecommendStore } from './recommend';

export const RootStore = types.model({
  recommendStore: types.optional(RecommendStore, {
    banners: [],
    loading: false,
  }),
});

type RootStoreType = typeof RootStore.Type
// tslint:disable-next-line:no-empty-interface
export interface Store extends RootStoreType {}

let store = RootStore.create({})
export default store
