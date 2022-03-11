import './src/config/ReactotronConfig';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(_) {
    return (
        <GestureHandlerRootView resizeMode="center" style={{ flex: 1 }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default App;
