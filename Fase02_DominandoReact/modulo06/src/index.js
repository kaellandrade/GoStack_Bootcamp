import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';

const App = (_) => (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    </GestureHandlerRootView>
);
export default App;
