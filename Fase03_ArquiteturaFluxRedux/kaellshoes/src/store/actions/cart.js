import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_AMOUNT } from '../actions';

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
}

export function removeToCart(id) {
    return {
        type: REMOVE_TO_CART,
        payload: id,
    };
}

export function updateAmount(id, amount) {
    return {
        type: UPDATE_AMOUNT,
        payload: { id, amount },
    };
}
