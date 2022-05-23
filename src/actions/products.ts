import { IProduct } from './../types/products';
import { Dispatch } from "react"
import { IProductState, ProductAction, ProductActionTypes } from "../types/products"
import Products from '../infos/products.json'

const timeoutMs = 2000;

export const getProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try{
            dispatch({ type: ProductActionTypes.SET_IS_LOADING, payload: { isLoading: true } })
            await setTimeout(() => {
                const productsRes = Products;
                dispatch({ type: ProductActionTypes.SET_PRODUCTS, payload: productsRes });
                dispatch({ type: ProductActionTypes.SET_IS_LOADING, payload: { isLoading: false } });
            }, timeoutMs)

        }
        catch(e){

        }
    }
}

export const addProductCart = (product: IProduct) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            const myProduct = product;
            dispatch({ type: ProductActionTypes.ADD_PRODUCT_CART, payload: {product: myProduct} });
        }
        catch (e) {

        }
    }
}