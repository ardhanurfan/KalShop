import type { FetchURLOptions } from "@nxweb/core";

import { APIProducts, apiUrlProducts } from "../base.js";

export const endpointProducts = "https://dummyjson.com/products";

export const getAllProducts = async (options?: Readonly<FetchURLOptions>) => {
  const url = apiUrlProducts(endpointProducts, options);
  const { data } = await APIProducts().get(url.toString());

  return data;
};
