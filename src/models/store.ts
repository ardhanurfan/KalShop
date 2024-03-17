import { combineReducers, createStore } from "@nxweb/core";
import {
  createCommandHook,
  createDispatchHook,
  createStoreHook,
  createStoreProvider,
} from "@nxweb/react";

import type { RootAction, RootModel } from "./types.js";
import { ProductsReducer } from "./products/reducers.js";
import { ProductsCommand } from "./products/commands.js";
import { CartReducers } from "./cart/reducers.js";
import { CartCommand } from "./cart/commands.js";

// ** Init reducers
const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducers,
});

// ** Init models
const rootModel: RootModel = {
  products: { products: [] },
  cart: { id: 0, products: [] },
};

// ** Init commands
const rootCommand = {
  products: ProductsCommand,
  cart: CartCommand,
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
