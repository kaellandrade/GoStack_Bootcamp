import * as React from 'react';
import {useSelector} from "react-redux";
import {ContainerCenter} from './styles';

import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';
import CatList from '../../components/Cart/ListCart/CartList';

export default (_) => {


    const cartDatas = useSelector(({cart}) => cart);
    const total = cartDatas.reduce((acumulador, {amount}) => acumulador + amount, 0);
    return cartDatas.length
        ?
        <CatList/>
        :
        <ContainerCenter>
            <EmptyCart/>
        </ContainerCenter>
};
