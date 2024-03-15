import {
  combineReducers, createStore
} from '@nxweb/core';
import {
  createCommandHook, createDispatchHook, createStoreHook, createStoreProvider
} from '@nxweb/react';

import type { RootAction, RootModel } from './types.js';
import { productsReducer } from './kalProducts/reducers.js';
import { productsCommand } from './kalProducts/commands.js';
import { CartCommand } from './cart/commands.js';
import { CartReducers, initState } from './cart/reducers.js';

// ** Init reducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: CartReducers
});

// ** Init models
const rootModel: RootModel = {
  products: {},
  cart: initState
};

// ** Init commands
const rootCommand = {
  products: productsCommand,
  cart: CartCommand
};

// ** Create store
export const store = createStore(rootReducer, rootModel);

// ** Create store provider
export const StoreProvider = createStoreProvider(store);

// ** Create store hook
export const useStore = createStoreHook<RootModel, RootAction>();

// ** Create command hook
export const useCommand = createCommandHook(rootCommand);

// ** Create dispatch hook
export const useDipatch = createDispatchHook<RootModel, RootAction>();
