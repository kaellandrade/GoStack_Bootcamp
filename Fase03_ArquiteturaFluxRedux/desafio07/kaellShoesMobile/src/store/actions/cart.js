import {
    ADD_TO_CART_REQUEST,
    REMOVE_TO_CART_SUCCESS,
    UPDATE_AMOUNT_REQUEST,
    UPDATE_AMOUNT_SUCCESS,
    ADD_TO_CART_SUCCESS,
    REMOVE_TO_CART_REQUEST, REMOVE_UNIT_SUCCESS, REMOVE_UNIT_REQUEST
} from '../actions';

export function addToCartRequest(id, navigate) {
    return {
        type: ADD_TO_CART_REQUEST,
        payload: {id, navigate},
    };
}
export function removeToCartRequest(id){
    return{
        type: REMOVE_TO_CART_REQUEST,
        payload: {id},
    }
}

export function addToCartSuccess(product) {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: product,
    };
}

export function removeToCartSuccess(id) {
    return {
        type: REMOVE_TO_CART_SUCCESS,
        payload: {id},
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

export function removeUnitRequest(id, amount){
    return{
        type:REMOVE_UNIT_REQUEST,
        payload:{id, amount}
    }
}
