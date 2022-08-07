import {all, call, put, takeLatest} from 'redux-saga/effects';
import {toast} from 'react-toastify';
import api from '../../../services/api';
import {signFailure, signInSuccess, signUpFailure, signUpSuccess} from "./actions";

/**
 * Realiza o login.
 * @param payload
 * @returns {Generator<*, void, *>}
 */
function* signIn({payload}) {
	try {
		const {email, password} = payload;
		const response = yield call(api.post, 'sessions', {
			email,
			password
		})

		const {token, user} = response.data;
		if (!user.provider) {
			toast.info('Você não é prestador de serviço.', {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
			});
			yield put(signFailure());
			return;
		}
		toast.success(`Seja, bem vindo ${user.name}!`, {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
		});
		yield  put(signInSuccess(token, user));
	} catch (error) {
		toast.error('Falha na autenticação.Verifique seus dados!', {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
		});
		yield put(signFailure())
	}

}

/**
 * Realiza o cadastro.
 * @param payload
 * @returns {Generator<*, void, *>}
 */
function* signUp({payload}) {
	try {
		const {name, email, password, navigate} = payload;
		const {data} = yield call(api.post, 'users', {
			name,
			password,
			email,
			provider: true
		});


		toast.success(`${name} seu cadastro foi efetuado com sucesso!`, {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
			}
		);
		yield put(signUpSuccess());
		navigate('/', {
			state: {
				email: data.email
			}
		});
	} catch (error) {
		toast.error(`Não foi possível efetuar seu cadastro.`, {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
		});
		yield put(signUpFailure())
	}

}

export function setToken({payload}) {
	if (!payload) return;

	const {token} = payload.auth;

	if (token) {
		api.defaults.headers.Authorization = `Bearer ${payload.auth.token}`;
	}

}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
