import './src/config/ReactotronConfig';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes';

function App(_) {
    return (
        <NavigationContainer >
            <AppRoutes />
        </NavigationContainer>
    );
}

export default App;
