const signInRequest = (email, password) => ({
		type: '@auth/SIGN_IN_REQUEST',
		payload: {email, password}
	})

const signInSuccess = (token, user) =>({
		type: '@auth/SIGN_IN_SUCCESS',
		payload: {token, user}
	})

const signFailure = () =>({
	type: '@auth/SIGN_FAILURE',
})

export {signFailure, signInSuccess, signInRequest};
