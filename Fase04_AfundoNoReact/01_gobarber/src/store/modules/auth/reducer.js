import produce from 'immer';
import api from "../../../services/api";

const INITIAL_STATE = {
	token: null,
	signed:false,
	loading:false
};

const auth = (state = INITIAL_STATE, action) => produce(state, draft => {
		switch (action.type) {
			case '@auth/SIGN_IN_REQUEST':{
				draft.loading = true;
				break;
			}
			case '@auth/SIGN_IN_SUCCESS': {
				draft.token = action.payload.token;
				draft.loading = false;
				draft.signed = true;
				api.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
				break;
			}
			case '@auth/SIGN_FAILURE':{
				draft.loading = false;
				break;
			}
			case '@auth/SIGN_OUT' : {
				draft.token = null;
				draft.signed = false;
				break;
			}

			default:
		}
	});

export default auth;
