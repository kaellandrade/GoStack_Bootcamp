import produce from 'immer';

const INITIAL_STATE = {
	profile: null,
	loading:false
};

const user = (state = INITIAL_STATE, action) => produce(state, draft => {
	switch (action.type) {
		case '@auth/SIGN_IN_SUCCESS': {
			draft.profile = action.payload.user;
			break;
		}
		case '@user/UPDATE_PROFILE_FAILURE': {
			draft.loading = false;
			break;
		}
		case '@user/UPDATE_PROFILE_SUCCESS': {
			draft.loading = false;
			draft.profile = action.payload.profile;
			break;
		}
		case '@user/UPDATE_PROFILE_REQUEST': {
			draft.loading = true;
			break
		}
		case '@auth/SIGN_OUT' : {
			draft.profile = null;
			break;
		}
		default:
	}
});

export default user;
