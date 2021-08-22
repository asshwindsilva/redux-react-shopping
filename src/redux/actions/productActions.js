import { ActionTypes } from "../constants/actions-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELLECTED_PRODUCTS,
        payload: product,
    };
}

export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELLECTED_PRODUCTS,

    };
}