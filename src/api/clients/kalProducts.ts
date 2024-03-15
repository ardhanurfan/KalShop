import type { FetchURLOptions } from '@nxweb/core';

import { apiUrlProducts, APIProducts } from '../base.js';

export const endpointProducts = '/products';

export const getKalProducts = async (options?: Readonly<FetchURLOptions>) => {
  const url = apiUrlProducts(endpointProducts, options);
  const { data } = await APIProducts().get(url.toString())

  return data;
};
