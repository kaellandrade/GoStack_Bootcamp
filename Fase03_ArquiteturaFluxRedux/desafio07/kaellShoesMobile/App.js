import './src/config/ReactotronConfig';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

function App(_) {
    return (
        <NavigationContainer>
            <Text>Olá, mundo!</Text>;
        </NavigationContainer>
    );
}

export default App;
