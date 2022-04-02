import './src/config/ReactotronConfig';
import {Provider} from 'react-redux'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import store from './src/store';

function App(_) {
    return (
        <Provider store={store}>

        <GestureHandlerRootView resizeMode="center" style={{ flex: 1 }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </GestureHandlerRootView>
        </Provider>
    );
}

export default App;
