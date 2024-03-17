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
import { SearchReducer } from "./search/reducers.js";
import { SearchCommand } from "./search/commands.js";
import { HistoryCommand } from "./history/commands.js";
import { HistoryReducers } from "./history/reducers.js";

// ** Init reducers
const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducers,
  search: SearchReducer,
  histories: HistoryReducers,
});

// ** Init models
const rootModel: RootModel = {
  products: { products: [] },
  cart: { id: 0, products: [] },
  histories: { histories: [] },
};

// ** Init commands
const rootCommand = {
  products: ProductsCommand,
  cart: CartCommand,
  histories: HistoryCommand,
  search: SearchCommand,
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
