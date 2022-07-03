const signInRequest = (email, password) => ({
	type: '@auth/SIGN_IN_REQUEST',
	payload: {email, password}
})

const signUpRequest = (name, email, password, navigate) => ({
	type: '@auth/SIGN_UP_REQUEST',
	payload: {name, email, password, navigate}
})

const signUpSuccess = (name) => ({
	type: '@auth/SIGN_UP_SUCCESS',
	payload: {name}
})

const signUpFailure = () => ({
	type: '@auth/SIGN_UP_FAILURE',
})

const signInSuccess = (token, user) => ({
	type: '@auth/SIGN_IN_SUCCESS',
	payload: {token, user}
})

const signFailure = () => ({
	type: '@auth/SIGN_FAILURE',
})

export {signFailure, signInSuccess, signInRequest, signUpRequest, signUpSuccess, signUpFailure};
