import { ActionTypes } from "../constants/actions-types";

const initialState = {
    products: []
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELLECTED_PRODUCTS:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELLECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
}