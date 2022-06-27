import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {signInSuccess} from "./actions";

export function* signIn({payload}) {
	const {email, password} = payload;
	const response = yield call(api.post, 'sessions',{
		email,
		password
	})

	const {token, user} = response.data;
	if(!user.provider) {
		console.tron.error('Usuário não é prestador!')
		return;
	}

	yield  put(signInSuccess(token, user));
	//	TODO Navegar usuário para dash board com hooks das rotas

}

export default all([
	takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);
