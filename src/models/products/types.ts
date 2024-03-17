import Product from "@pages/products/{id}";

interface Product {
  description: string;
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

// Page Model
interface ProductsModel {
  products?: Product[];
  selectedProduct?: Product;
}

enum ProductsActionType {
  GET_PRODUCTS = "GET_PRODUCTS",
  SELECT_CURRENT_PRODUCT = "SELECT_CURRENT_PRODUCT",
  CLEAR_SELECTED_PRODUCT = "CLEAR_SELECTED_PRODUCT",
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  EDIT_PRODUCT = "EDIT_PRODUCT",
}

type ProductsAction =
  | {
      type: ProductsActionType.GET_PRODUCTS;
      payload?: Product[];
    }
  | {
      type: ProductsActionType.SELECT_CURRENT_PRODUCT;
      payload?: number;
    }
  | {
      type: ProductsActionType.CLEAR_SELECTED_PRODUCT;
    }
  | {
      type: ProductsActionType.ADD_PRODUCT;
      payload?: Product;
    }
  | {
      type: ProductsActionType.DELETE_PRODUCT;
      payload?: number;
    }
  | {
      type: ProductsActionType.EDIT_PRODUCT;
      payload?: Product;
    };

export { ProductsActionType };
export type { ProductsModel, ProductsAction, Product };
