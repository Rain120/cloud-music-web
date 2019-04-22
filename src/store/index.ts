import { types } from 'mobx-state-tree';
import { DjStore } from './Dj';

export const RootStore = types.model({
  djStore: types.optional(DjStore, {
    loading: false,
  }),
});

type RootStoreType = typeof RootStore.Type;
// tslint:disable-next-line:no-empty-interface
export interface StoreProps extends RootStoreType {};

let store = RootStore.create({});

export default store
