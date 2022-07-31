import {all, takeLatest, call, put} from 'redux-saga/effects';
import {toast} from "react-toastify";
import api from "../../../services/api";
import {updateProfileFailure, updateProfileSuccess} from "./actions";

/**
 * Atualiza o perfil do usário.
 * @param payload
 * @returns {Generator<*, void, *>}
 */
export function* updateProfile({payload}) {
	try {

	const {name, email, ...rest} = payload.data;

	const profile = {
		name, email,
		...(rest.oldPassword ? rest : {})
	}

	const response = yield call(api.put, 'users', profile);
	toast.success('Perfil atualizado com sucesso.', {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
	});

	yield put(updateProfileSuccess(response.data));
	} catch (err){
		toast.error('Error ao atualizar perfil.', {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
		});
	}
	yield put(updateProfileFailure());
}

export default all([
	takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
