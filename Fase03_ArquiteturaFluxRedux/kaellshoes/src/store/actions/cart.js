import {
    ADD_TO_CART_REQUEST,
    REMOVE_TO_CART,
    UPDATE_AMOUNT_REQUEST,
    UPDATE_AMOUNT_SUCCESS,
    ADD_TO_CART_SUCCESS,
} from '../actions';

export function addToCartRequest(id, navigate) {
    return {
        type: ADD_TO_CART_REQUEST,
        payload: {id, navigate},
    };
}

export function addToCartSuccess(product) {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: product,
    };
}

export function removeToCart(id) {
    return {
        type: REMOVE_TO_CART,
        payload: id,
    };
}

export function updateAmountRequest(id, amount) {
    return {
        type: UPDATE_AMOUNT_REQUEST,
        payload: { id, amount },
    };
}

export function updateAmountSuccess(id, amount) {
    return {
        type: UPDATE_AMOUNT_SUCCESS,
        payload: { id, amount },
    };
}
