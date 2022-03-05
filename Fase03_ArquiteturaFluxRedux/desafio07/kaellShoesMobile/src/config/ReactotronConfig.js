import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import ractotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
    const tron = Reactotron.configure({
        name: 'Kaell_Shoes',
        host: '192.168.100.6',
    })
        .useReactNative()
        .use(reactotronRedux())
        .use(ractotronSaga())
        .connect();

    console.tron = tron;

    tron.clear();
}
