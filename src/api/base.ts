import { compact, createFetch, createFetchURL } from "@nxweb/core";
import type { FetchURLOptions } from "@nxweb/core";

// import { apiMock } from "./mock.js";

// export const apiURL = (
//   endpoint: string,
//   options: Readonly<FetchURLOptions> = {}
// ) => {
//   return createFetchURL(
//     endpoint,
//     compact({
//       ...options,
//       get baseURL() {
//         return options.baseURL ?? window.NX.env.apiURL;
//       },
//     })
//   );
// };

// export const API = (
//   token: string,
//   type: string = "Bearer" as const,
//   mocked: boolean = false
// ) => {
//   const fetch = createFetch({
//     get baseURL() {
//       return window.NX.env.apiURL;
//     },
//     headers: compact({
//       authorization: [type, token].filter(Boolean).join(" "),
//     }),
//   });

//   return mocked ? apiMock(fetch) : fetch;
// };
// export const API = (token: string, type: string = "Bearer" as const) => {
//   const fetch = createFetch({
//     get baseURL() {
//       return window.NX.env.apiURL;
//     },
//     headers: compact({
//       authorization: [type, token].filter(Boolean).join(" "),
//     }),
//   });

//   return fetch;
// };

export const apiUrlProducts = (
  endpointProducts: string,
  options: Readonly<FetchURLOptions> = {}
) =>
  createFetchURL(endpointProducts, {
    baseURL: window.NX?.env?.apiURL,
    ...options,
  });

export const APIProducts = () =>
  createFetch({
    baseURL: window.NX?.env?.apiURL,
    headers: {
      Authorization: `Bearer random`,
    },
  });

export const apiUrlCart = (
  endpointCart: string,
  options: Readonly<FetchURLOptions> = {}
) =>
  createFetchURL(endpointCart, {
    baseURL: window.NX.env.productsURL,
    ...options,
  });

export const APICart = () =>
  createFetch({
    baseURL: window.NX.env.productsURL,
    headers: {
      Authorization: `Bearer random`,
    },
  });
