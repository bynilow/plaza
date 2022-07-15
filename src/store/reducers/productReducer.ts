import { IProductState, ProductAction, ProductActionTypes } from "../../types/products"

const initalState: IProductState = {
    products: [],
    productsInCart: [],
    productsInFavorite: [],
    cartObjects: [],
    isLoading: false,
    checkedProductsInCart: []
}

export const productReducer = (state = initalState, action: ProductAction): IProductState => {
    switch(action.type){
        case ProductActionTypes.SET_PRODUCTS: {
            return{
                ...state,
                products: action.payload
            }
        }
        case ProductActionTypes.GET_PRODUCTS_IN_CART: {
            return{
                ...state,
                cartObjects: action.payload.products
            }
        }
        case ProductActionTypes.SET_PRODUCTS_IN_CART: {
            return{
                ...state,
                productsInCart: action.payload.products
            }
        }
        case ProductActionTypes.ADD_PRODUCT_CART: {
            const payload = action.payload;
            let newCart = state.productsInCart;
            const foundCartIndex = newCart.findIndex(p => p.productId === payload.productId)

            if(foundCartIndex > -1){
                const tempCount = newCart[foundCartIndex].count;
                newCart[foundCartIndex].count = tempCount + 1;
            }
            else{
                newCart.push({productId: payload.productId, count: 1});
            }

            localStorage.setItem('productsInCart', JSON.stringify(newCart))
            return{
                ...state,
                productsInCart: newCart
            }
        }
        case ProductActionTypes.REMOVE_PRODUCT_CART: {
            const payload = action.payload;
            let newCart = state.productsInCart;

            const foundCartIndex = newCart.findIndex(p => p.productId === payload.productId)
            if(foundCartIndex > -1){
                if(newCart[foundCartIndex].count > 1){
                    const tempCount = newCart[foundCartIndex].count;
                    newCart[foundCartIndex].count = tempCount - 1;
                }
                else{
                    newCart.splice(foundCartIndex, 1)
                }
            }
            localStorage.setItem('productsInCart', JSON.stringify(newCart))
            return {
                ...state,
                productsInCart: newCart
            }
        }
        case ProductActionTypes.SET_COUNT_IN_CART: {
            const payload = action.payload;
            let newCart = state.productsInCart;

            const foundCartIndex = newCart.findIndex(p => p.productId === payload.productId)

            if(foundCartIndex > -1) newCart[foundCartIndex].count = payload.productCount;

            localStorage.setItem('productsInCart', JSON.stringify(newCart))
            return {
                ...state,
                productsInCart: newCart
            }
        }
        case ProductActionTypes.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
        case ProductActionTypes.TOGGLE_FAVORITE: {
            const payload = action.payload;
            let newFavorite = state.productsInFavorite;
            
            const foundFavoriteIndex = newFavorite.findIndex(p => p.productId === payload.productId)
            if(foundFavoriteIndex > -1) newFavorite.splice(foundFavoriteIndex, 1)
            else newFavorite.push({productId: payload.productId})

            return {
                ...state,
                productsInFavorite: newFavorite,
               
            }
        }
        case ProductActionTypes.DELETE_PRODUCT_FROM_CART: {
            let newCart = state.productsInCart;
            const foundInd = state.productsInCart.findIndex(p => p.productId === action.payload.productId);
            newCart.splice(foundInd,1);
            
            localStorage.setItem('productsInCart', JSON.stringify(newCart))
            return {
                ...state,
                productsInCart: newCart
            }
        }
        case ProductActionTypes.TOGGLE_CHECKED_CART: {
            let newChecked = state.checkedProductsInCart;

            const productId = action.payload.productId;
            const cpIndex = newChecked.findIndex(cp => cp === productId);
            if (cpIndex > -1) {
                newChecked.splice(cpIndex, 1);
            }
            else {
                newChecked.push(productId);
            }
            return {
                ...state,
                checkedProductsInCart: newChecked
            }
        }

        case ProductActionTypes.SET_CHECKED_PRODUCTS_IN_CART: {
            return {
                ...state,
                checkedProductsInCart: action.payload.productsId
            }
        }

        case ProductActionTypes.TOGGLE_CHECKED_ALL_PRODUCTS_IN_CART: {
            let newChecked = state.checkedProductsInCart;
            const payload = action.payload.productsId;
            newChecked = (newChecked.length === payload.length) ? [] : payload;
            return {
                ...state,
                checkedProductsInCart: newChecked
                    
            }
        }
        default: 
            return state
    }
}