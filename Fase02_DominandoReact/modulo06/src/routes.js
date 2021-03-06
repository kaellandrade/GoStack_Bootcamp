import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main';
import User from './pages/User';
import Star from './pages/Star';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#FFF',
                }}
            >
                <Stack.Screen
                    options={{ title: 'Usuários' }}
                    name="Main"
                    component={Main}
                />
                <Stack.Screen
                    options={({ route }) => ({ title: route.params.user.name })}
                    name="User"
                    component={User}
                />
                <Stack.Screen
                    options={({ route }) => ({ title: route.params.star.name })}
                    name="Star"
                    component={Star}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
