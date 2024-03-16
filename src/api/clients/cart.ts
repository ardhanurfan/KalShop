import { APICart, apiUrlCart } from "@api/base";
import { FetchURLOptions } from "@nxweb/core";

export const endpointCart = "carts/1";

export const getAllCart = async (options?: Readonly<FetchURLOptions>) => {
    const url = apiUrlCart(endpointCart, options);
    const { data } = await APICart().get(url.toString());

    return data
}