import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './pages/Cart';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused ? 'card' : 'card-outline';
        } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
});

const AppRoutes = (_) => (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen  name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
);
export { AppRoutes };
