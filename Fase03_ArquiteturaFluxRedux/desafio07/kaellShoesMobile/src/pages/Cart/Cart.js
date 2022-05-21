import * as React from 'react';
import {useSelector} from "react-redux";
import {Container} from './styles';

import EmptyCart from '../../components/Cart/EmptyCart';
import {Text} from "react-native";

export default (_) => {


    const cartDatas = useSelector(({cart}) => cart);
    console.log(cartDatas);
    const total = cartDatas.reduce((acumulador, {amount})=> acumulador + amount, 0);
    return cartDatas.length
        ?
        <Container>
            <Text>{total}</Text>
        </Container>
        :
        <Container>
            <EmptyCart/>
        </Container>
};
