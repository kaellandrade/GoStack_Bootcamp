import React from 'react';

import {Container, Amount} from './styles.js'
import {BtnICon} from "../../Btns/Btns";
import Icon from "react-native-vector-icons/Ionicons";
import {useDispatch} from "react-redux";
import {addToCartRequest, removeUnitRequest} from "../../../store/actions/cart";

export const AmountBox = ({amount,id}) => {
    const dispatch = useDispatch();

    const handleAddProduct = (id) => {
        dispatch(addToCartRequest(id));
    };

    const handleRemoveProductUnit = (id) => {
        dispatch(removeUnitRequest(id));
    };

    return (
        <Container>
            <BtnICon onPress={_=>handleAddProduct(id)} ><Icon name="add" color={'#5b42b4'} size={30} /></BtnICon>
            <Amount>{amount}</Amount>
            <BtnICon onPress={_=>handleRemoveProductUnit(id)}  ><Icon name="remove" color={'#5b42b4'} size={30} /></BtnICon>
        </Container>

    );
}
