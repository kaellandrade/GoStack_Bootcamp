import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API from '../../../services/api';
import { formatPrice } from '../../../util/format';
import history from '../../../services/history';
import { addToCartSuccess, updateAmountSuccess } from '../../actions/cart';
import { ADD_TO_CART_REQUEST, UPDATE_AMOUNT_REQUEST } from '../../actions';

function* addTocart({ payload }) {
    const productExists = yield select(({ cart }) =>
        cart.find((p) => p.id === payload)
    );

    const stock = yield call(API.get, `/stock/${payload}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.info('Quantidade solicitada fora de estoque!');
        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(payload, amount));
    } else {
        const response = yield call(API.get, `/products/${payload}`);
        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
        // history.push({ pathname: '/cart' });
        // window.location.href = '/cart'
    }
}

function* updateAmount({ payload }) {
    if (payload.amount <= 0) return;
    const stock = yield call(API.get, `stock/${payload.id}`);
    const stockMount = stock.data.amount;

    if (payload.amount > stockMount) {
        toast.info('Quantidade solicitada fora de estoque!');
        return;
    }
    yield put(updateAmountSuccess(payload.id, payload.amount));
}

export default all([
    takeLatest(ADD_TO_CART_REQUEST, addTocart),
    takeLatest(UPDATE_AMOUNT_REQUEST, updateAmount),
]);
