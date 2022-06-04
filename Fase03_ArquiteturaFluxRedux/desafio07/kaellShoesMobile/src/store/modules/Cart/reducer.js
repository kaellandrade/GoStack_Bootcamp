import produce from 'immer';
import {
    ADD_TO_CART_SUCCESS,
    REMOVE_TO_CART_SUCCESS,
    UPDATE_AMOUNT_SUCCESS,
} from '../../actions';

export default function cart(state = [], { type, payload } = {}) {
    switch (type) {
        case ADD_TO_CART_SUCCESS:
            return produce(state, (draft) => {
                draft.push(payload);
            });
        case REMOVE_TO_CART_SUCCESS:
            return produce(state, (draft) =>
                draft.filter(({ id }) => id !== payload.id)
            );
        case UPDATE_AMOUNT_SUCCESS: {
            return produce(state, (draft) => {
                const productIndex = draft.findIndex(
                    ({ id }) => id === payload.id
                );
                if (productIndex !== -1) {
                    draft[productIndex].amount = Number(payload.amount);
                }
            });
        }
        default:
            return state;
    }
}
