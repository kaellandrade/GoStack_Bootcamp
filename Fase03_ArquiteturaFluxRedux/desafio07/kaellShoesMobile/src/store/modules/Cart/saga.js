import {Alert} from 'react-native';
import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import API from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from '../../actions/cart';
import { ADD_TO_CART_REQUEST, UPDATE_AMOUNT_REQUEST } from '../../actions';

function* addTocart({ payload }) {
    const { id, navigate } = payload;
    const productExists = yield select(({ cart }) =>
        cart.find((p) => p.id === id)
    );

    const stock = yield call(API.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        Alert.alert('Quantidade solicitada fora de estoque!');
        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(API.get, `/products/${id}`);
        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
        // navigate('/cart');
    }
}

function* updateAmount({ payload }) {
    if (payload.amount <= 0) return;
    const stock = yield call(API.get, `stock/${payload.id}`);
    const stockMount = stock.data.amount;

    if (payload.amount > stockMount) {
        Alert.alert('Quantidade solicitada fora de estoque!');
        return;
    }
    yield put(updateAmountSuccess(payload.id, payload.amount));
}

export default all([
    takeLatest(ADD_TO_CART_REQUEST, addTocart),
    takeLatest(UPDATE_AMOUNT_REQUEST, updateAmount),
]);
