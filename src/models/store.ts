import {
  combineReducers, createStore
} from '@nxweb/core/redux';
import {
  createCommandHook, createStoreHook, createStoreProvider
} from '@nxweb/react/redux';

import type { RootAction, RootModel } from './types.js';

// ** Init reducers
const rootReducer = combineReducers({
});

// ** Init models
const rootModel: RootModel = {};

// ** Init commands
const rootCommand = {
};

// ** Create store
export const store = createStore(rootReducer, rootModel);

// ** Create store provider
export const StoreProvider = createStoreProvider(store);

// ** Create store hook
export const useStore = createStoreHook<RootModel, RootAction>();

// ** Create command hook
export const useCommand = createCommandHook(rootCommand);

/*
 * TODO
 * export const useContextStore = createStoreHook<ContextModel, ContextAction>();
 * export function useContextStore(): [ContextModel | undefined, TDispatch<ContextAction>] {
 *   return [
 *     useSelector<RootModel, ContextModel | undefined>((state) => state.context),
 *     useDispatch<TDispatch<ContextAction>>()
 *   ];
 * }
 */
