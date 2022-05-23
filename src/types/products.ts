export interface IProductState {
    products: IProduct[];
    productsInCart: IProductInCart[]; 
    isLoading?: boolean;
}

export interface IProduct {
    id: number;
    price: number;
    priceWithoutDiscount: number;
    isBestSeller: boolean;
    countBonuses: number;
    name: string;
    averageDateDelivery: number;
    photosURL: string[];
}

interface IProductInCart {
    product: IProduct;
    count: number;
}

export enum ProductActionTypes {
    SET_PRODUCTS = "SET_PRODUCTS",
    SET_IS_LOADING = "SET_IS_LOADING",
    ADD_PRODUCT_CART = "ADD_PRODUCT_CART",
    REMOVE_PRODUCT_CART = "REMOVE_PRODUCT_CART"
}

interface ISetProductsAction {
    type: ProductActionTypes.SET_PRODUCTS;
    payload: IProduct[];
}

interface IAddProductAction {
    type: ProductActionTypes.ADD_PRODUCT_CART;
    payload: {
        product: IProduct
    }
}

interface IRemoveProductAction {
    type: ProductActionTypes.REMOVE_PRODUCT_CART;
    payload: {
        id: number;
    }
}

interface ISetIsLoadingAction {
    type: ProductActionTypes.SET_IS_LOADING;
    payload: {
        isLoading: boolean;
    }
}

interface IProductAction {
    type: string;
    payload?: any;
}

export type ProductAction =
    ISetProductsAction |
    IAddProductAction |
    IRemoveProductAction |
    ISetIsLoadingAction;