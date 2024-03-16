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
  GET_INDIVIDUAL_PRODUCT = "GET_INDIVIDUAL_PRODUCT",
  CLEAR = "CLEAR",
  ADD_PRODUCT = "ADD_PRODUCT",
}

type ProductsAction =
  | {
      type: ProductsActionType.GET_PRODUCTS;
      payload?: Product[];
    }
  | {
      type: ProductsActionType.GET_INDIVIDUAL_PRODUCT;
      payload?: Product;
    }
  | {
      type: ProductsActionType.CLEAR;
    }
  | {
      type: ProductsActionType.ADD_PRODUCT;
      payload?: Product;
    };

export { ProductsActionType };
export type { ProductsModel, ProductsAction, Product };
