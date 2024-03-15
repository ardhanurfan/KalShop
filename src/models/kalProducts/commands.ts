import { getKalProducts } from "@api/clients/kalProducts";
import { Product, ProductsAction, ProductsActionType, ProductsModel } from "@models/kalProducts/types";
import { RootModel } from "@models/types";
import { Command, FetchURLOptions } from "@nxweb/core";

const productsCommand = {
    getAllProduct: (options?: Readonly<FetchURLOptions>) => {
        return async (dispatch) => {
            try {
                const response = await getKalProducts(options) as { products: Product[] }

                if(response) {
                    const payload: ProductsModel = {
                        products: response.products
                    };

                    dispatch({
                        type: ProductsActionType.GET_PRODUCTS,
                        payload: payload
                    });
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    clear: (): ProductsAction => {
        return {
            type: ProductsActionType.CLEAR
        }
    }
} satisfies Command<RootModel, ProductsAction>;

export { productsCommand }