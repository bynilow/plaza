import { IProduct, IProductInCart } from './../types/products';
import { Dispatch } from "react"
import { IProductState, ProductAction, ProductActionTypes } from "../types/products"
import Products from '../infos/products.json'

const timeoutMs = 1500;

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

export const getProductsInCart = (productsId: number[]) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try{
            dispatch({ type: ProductActionTypes.SET_IS_LOADING, payload: { isLoading: true } })
            await setTimeout(() => {
                const productsRes = Products;
                let myCart:IProduct[] = [];
                productsRes.forEach(p => {
                    if(productsId.findIndex(pi => pi === p.id) > -1){
                        myCart.push(p)
                    }
                })
                console.log("myCart")
                console.log(myCart)
                dispatch({ type: ProductActionTypes.GET_PRODUCTS_IN_CART, payload: {products: myCart} });
                dispatch({ type: ProductActionTypes.SET_IS_LOADING, payload: { isLoading: false } });
            }, timeoutMs)
            
        }
        catch{

        }
    }
}

export const setProductsInCart = (products: IProductInCart[]) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try{
            dispatch({type: ProductActionTypes.SET_PRODUCTS_IN_CART, payload: {products}})
        }
        catch{

        }
    }
}

export const addProductCart = (productId: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.ADD_PRODUCT_CART, payload: {productId} });
        }
        catch (e) {

        }
    }
}

export const removeProductCart = (productId: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.REMOVE_PRODUCT_CART, payload: {productId} });
        }
        catch (e) {

        }
    }
}

export const setCountProductCart = (productId: number, productCount: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try{
            dispatch({ type: ProductActionTypes.SET_COUNT_IN_CART, payload: {productId, productCount}})
        }
        catch (e) {

        }
    }
}

export const toggleProductFavorite = (productId: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.TOGGLE_FAVORITE, payload: {productId} });
        }
        catch (e) {

        }
    }
}

export const deleteProductFromCart = (productId: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try{
            dispatch({ type: ProductActionTypes.DELETE_PRODUCT_FROM_CART, payload: {productId} });
        }
        catch(e){

        }
    }
}

export const toggleCheckedProductInCart = (productId: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.TOGGLE_CHECKED_CART, payload: {productId} });
        }
        catch (e) {

        }
    }
}

export const setCheckedProducts = (productsId: number[]) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.SET_CHECKED_PRODUCTS_IN_CART, payload: {productsId} });
        }
        catch (e) {

        }
    }
}

export const toggleCheckedAllProductsInCart = (productsId: number[]) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.TOGGLE_CHECKED_ALL_PRODUCTS_IN_CART, payload: {productsId} });
        }
        catch (e) {

        }
    }
}



