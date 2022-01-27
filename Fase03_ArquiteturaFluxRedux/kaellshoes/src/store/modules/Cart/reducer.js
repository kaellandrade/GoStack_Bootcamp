import { ADD_TO_CART } from '../../actions';

export default function cart(state = [], { type, payload } = {}) {
    switch (type) {
        case ADD_TO_CART:
            return [...state, payload];
        default:
            return state;
    }
}
