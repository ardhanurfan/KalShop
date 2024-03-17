import type { FetchURLOptions } from "@nxweb/core";

import { APIProducts, apiUrlProducts } from "../base.js";
import { Product } from "@models/products/types.js";

export const endpointProducts = "products";
export const endpointAddProduct = "products/add";

export const getAllProducts = async (options?: Readonly<FetchURLOptions>) => {
  const url = apiUrlProducts(endpointProducts, options);
  const { data } = await APIProducts().get(url.toString());

  return data;
};

export const postProduct = async (
  data: Product,
  options?: Readonly<FetchURLOptions>
) => {
  try {
    const url = apiUrlProducts(endpointAddProduct, options);
    const res = await APIProducts().post(url.toString(), JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (
  id: number,
  options?: Readonly<FetchURLOptions>
) => {
  try {
    const url = apiUrlProducts(`${endpointProducts}/${id}`, options);
    const res = await APIProducts().delete(url.toString());
    return res;
  } catch (error) {
    throw error;
  }
};

export const putProduct = async (data: Product) => {
  try {
    const url = apiUrlProducts(`${endpointProducts}/${data.id}`);
    const res = await APIProducts().put(url.toString(), data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
