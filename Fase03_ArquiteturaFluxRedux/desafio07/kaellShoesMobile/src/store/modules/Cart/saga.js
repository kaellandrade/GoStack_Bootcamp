import {Alert} from 'react-native';
import {call, put, all, takeLatest, select} from 'redux-saga/effects';
import API from '../../../services/api';
import {formatPrice} from '../../../util/format';
import {addToCartSuccess, removeToCartSuccess, updateAmountSuccess} from '../../actions/cart';
import {ADD_TO_CART_REQUEST, REMOVE_TO_CART_REQUEST, UPDATE_AMOUNT_REQUEST,REMOVE_UNIT_REQUEST} from '../../actions';

function* addTocart({payload}) {
    const {id} = payload;
    const productExists = yield select(({cart}) =>
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
    }
}

function* updateAmount({payload}) {
    if (payload.amount <= 0) return;
    const stock = yield call(API.get, `stock/${payload.id}`);
    const stockMount = stock.data.amount;

    if (payload.amount > stockMount) {
        Alert.alert('Quantidade solicitada fora de estoque!');
        return;
    }
    yield put(updateAmountSuccess(payload.id, payload.amount));
}

function* removeToCart({payload}) {
    const {id} = payload;
    yield put(removeToCartSuccess(id));
}


function* removeUnitToCart({payload}) {
    const productExists = yield select(({cart}) =>
        cart.find((p) => p.id === payload.id)
    );

    const {id} = payload;
    if(productExists !== -1){
        const currentAmount = productExists.amount - 1;
        if(currentAmount === 0 ){
            yield put(removeToCartSuccess(id));
        }else{
            yield put(updateAmountSuccess(id, productExists.amount - 1));
        }
    }

}

export default all([
    takeLatest(REMOVE_TO_CART_REQUEST, removeToCart),
    takeLatest(ADD_TO_CART_REQUEST, addTocart),
    takeLatest(UPDATE_AMOUNT_REQUEST, updateAmount),
    takeLatest(REMOVE_UNIT_REQUEST, removeUnitToCart)
]);
