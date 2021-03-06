import * as React from 'react';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => {
    return {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Loja') {
                iconName = focused ? 'card' : 'card-outline';
            } else if (route.name === 'Carrinho') {
                iconName = focused ? 'cart' : 'cart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: '#9b9a9f',
        tabBarActiveTintColor: '#17161b',
        tabBarStyle: { backgroundColor: '#ffffff', position: 'relative' },
        tabBarBadgeStyle: { backgroundColor: '#634db6' },
        headerShown: false,
    };
};

const AppRoutes = (_) => {
    const totalAmount = useSelector(({ cart }) => cart).reduce(
        (ccur, atual) => ccur + atual.amount,
        0
    );
    console.tron.log(totalAmount)

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Loja" component={Home} />
            <Tab.Screen
                name="Carrinho"
                component={Cart}
                options={
                { tabBarBadge: totalAmount, tabBarBadgeStyle:{top:-2} }
            }
            />
        </Tab.Navigator>
    );
};
export { AppRoutes };
