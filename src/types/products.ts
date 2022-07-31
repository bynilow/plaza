export interface IProductState {
    products: IProduct[];
    productsInCart: IProductInCart[]; 
    productsInFavorite: IProductInFavorite[];
    cartObjects: IProduct[];
    isLoading?: boolean;
    checkedProductsInCart: number[];
    productPage: IProduct | null;
    productReviews: IReviewProduct | null;
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
    isFavorite?: boolean;
    weight: number;
    rating: number;
    categoryFullPath: string;
    countOrders: number;
}

export interface IProductInCart {
    productId: number;
    count: number;
}

interface IProductInFavorite {
    productId: number;
}

export interface IReviewProduct {
    productId: number;
    reviews: IReview[] | null;
}

interface IReview {
    avatarURL: string | null;
    nickname: string;
    advantages: string;
    description: string;
    disadvantages: string;
    color: string;
    rating: number;
    photosURL: string[];
    writedDate: string;
    helped: number;
    helpless: number;
    private: boolean;
}

export enum ProductActionTypes {
    SET_PRODUCTS = "SET_PRODUCTS",
    SET_IS_LOADING = "SET_IS_LOADING",
    GET_PRODUCTS_IN_CART = "GET_PRODUCTS_IN_CART",
    SET_PRODUCTS_IN_CART = "SET_PRODUCTS_IN_CART",
    ADD_PRODUCT_CART = "ADD_PRODUCT_CART",
    REMOVE_PRODUCT_CART = "REMOVE_PRODUCT_CART",
    TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
    SET_COUNT_IN_CART = "SET_COUNT_IN_CART",
    DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART",
    TOGGLE_CHECKED_CART = "TOGGLE_CHECKED_CART",
    SET_CHECKED_PRODUCTS_IN_CART = "SET_CHECKED_PRODUCTS_IN_CART",
    TOGGLE_CHECKED_ALL_PRODUCTS_IN_CART = "TOGGLE_CHECKED_ALL_PRODUCTS_IN_CART",
    DELETE_SELECTED_CART = "DELETE_SELECTED_CART",
    SET_PRODUCT = "SET_PRODUCT",
    SET_REVIEWS = "SET_REVIEWS",
}

interface ISetProductsAction {
    type: ProductActionTypes.SET_PRODUCTS;
    payload: IProduct[];
}

interface IGetProductsInCartAction {
    type: ProductActionTypes.GET_PRODUCTS_IN_CART;
    payload: {
        products: IProduct[]
    };
}

interface ISetProductsInCartAction {
    type: ProductActionTypes.SET_PRODUCTS_IN_CART;
    payload: {
        products: IProductInCart[]
    };
}

interface IAddProductAction {
    type: ProductActionTypes.ADD_PRODUCT_CART;
    payload: {
        productId: number
    }
}

interface IRemoveProductAction {
    type: ProductActionTypes.REMOVE_PRODUCT_CART;
    payload: {
        productId: number
    }
}

interface ISetCountInCartAction {
    type: ProductActionTypes.SET_COUNT_IN_CART;
    payload: {
        productId: number,
        productCount: number,
    }
}

interface ISetIsLoadingAction {
    type: ProductActionTypes.SET_IS_LOADING;
    payload: {
        isLoading: boolean
    }
}

interface IToggleFavoriteAction {
    type: ProductActionTypes.TOGGLE_FAVORITE;
    payload: {
        productId: number
    }
}

interface IDeleteProductFromCartAction {
    type: ProductActionTypes.DELETE_PRODUCT_FROM_CART;
    payload: {
        productId: number
    }
}

interface IToggleCheckedCartAction {
    type: ProductActionTypes.TOGGLE_CHECKED_CART;
    payload: {
        productId: number
    }
}

interface ISetCheckedProductsAction {
    type: ProductActionTypes.SET_CHECKED_PRODUCTS_IN_CART;
    payload: {
        productsId: number[]
    }
}

interface IToggleCheckedAllProductsInCartAction {
    type: ProductActionTypes.TOGGLE_CHECKED_ALL_PRODUCTS_IN_CART;
    payload: {
        productsId: number[]
    }
}

interface IDeleteSelectedCartAction {
    type: ProductActionTypes.DELETE_SELECTED_CART;
}

interface ISetProductAction {
    type: ProductActionTypes.SET_PRODUCT;
    payload: {
        product: IProduct;
    }
}

interface ISetReviewsAction {
    type: ProductActionTypes.SET_REVIEWS;
    payload: {
        reviews: IReviewProduct;
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
    ISetIsLoadingAction |
    IToggleFavoriteAction |
    IGetProductsInCartAction |
    ISetCountInCartAction |
    ISetProductsInCartAction | 
    IDeleteProductFromCartAction |
    IToggleCheckedCartAction |
    ISetCheckedProductsAction |
    IToggleCheckedAllProductsInCartAction |
    IDeleteSelectedCartAction | 
    ISetProductAction |
    ISetReviewsAction;