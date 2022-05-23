import { IProductState, ProductAction, ProductActionTypes } from "../../types/products"

const initalState: IProductState = {
    products: [],
    productsInCart: [],
    isLoading: false,
}

export const productReducer = (state = initalState, action: ProductAction): IProductState => {
    switch(action.type){
        case ProductActionTypes.SET_PRODUCTS: 
            return{
                ...state,
                products: action.payload
            }
        case ProductActionTypes.ADD_PRODUCT_CART: 
            const payload = action.payload;
            let newCart = state.productsInCart;
            let isFound: boolean = false;
            if(newCart.length){
                newCart.forEach((i, ind) => {
                    if(i.product.id === payload.product.id){
                        newCart[ind].count = newCart[ind].count + 1;
                        isFound = true;
                    }
                })
                if(!isFound) newCart.push({product: payload.product, count: 1})
                console.log('is new: ', isFound)
            }
            else{
                newCart.push({product: payload.product, count: 1})
            }
            return{
                ...state,
                productsInCart: newCart
            }
        case ProductActionTypes.REMOVE_PRODUCT_CART:
            return {
                ...state
            }
        case ProductActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default: 
            return state
    }
}