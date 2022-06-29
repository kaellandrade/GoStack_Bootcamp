import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";

/**
 * Persistinkdo os reducers no localstorage
 * @param reducers
 * @returns {Reducer<PersistPartial, Action>}
 */
export default reducers => {
	const persistedReducer = persistReducer({
		key: 'gobarber',
		storage,
		whitelist: ['auth', 'user']
	}, reducers);

	return persistedReducer;
}
