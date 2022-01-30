import produce from 'immer';
import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_AMOUNT } from '../../actions';

export default function cart(state = [], { type, payload } = {}) {
    switch (type) {
        case ADD_TO_CART:
            return produce(state, (draft) => {
                const productIndex = draft.findIndex(
                    ({ id }) => payload.id === id
                );
                if (productIndex !== -1) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({ ...payload, amount: 1 });
                }
            });
        case REMOVE_TO_CART:
            return produce(state, (draft) =>
                draft.filter(({ id }) => id !== payload)
            );
        case UPDATE_AMOUNT: {
            if (payload.amount <= 0) {
                return state;
            }
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
