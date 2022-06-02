import React from 'react';
import { InfoCard, NoItensText, IconCartOff, AlertIcon } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const EmptyCart = () => {
    return (
        <InfoCard>
            <IconCartOff>
                <Icon name="cart" color={'#ececec'} size={150} />
                <AlertIcon name="alert-circle" color={'#634db6'} size={50} />
            </IconCartOff>
            <NoItensText>Seu carrinho está vazio!</NoItensText>
        </InfoCard>
    );
};

export default EmptyCart;
