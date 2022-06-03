import * as React from 'react';
import {useSelector} from "react-redux";
import {ContainerCenter} from './styles';

import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';
import CatList from '../../components/Cart/ListCart/CartList';

/**
 * Recebe uma lista de produtos e retorna o total.
 * @param products
 */
const calculatedTotal = (products)=>{
    return products.reduce((acumulador, product)=>{
        const price = product.price;
        const amount = product.amount;
        return (price * amount) + acumulador;

    },0);
}

export default (_) => {

    const cartDatas = useSelector(({cart}) => cart);
    const total = calculatedTotal(cartDatas);

    return cartDatas.length
        ?
        <CatList total={total}/>
        :
        <ContainerCenter>
            <EmptyCart/>
        </ContainerCenter>
};
