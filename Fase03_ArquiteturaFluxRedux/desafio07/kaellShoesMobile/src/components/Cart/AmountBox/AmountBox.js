import React from 'react';

import {Container, Amount} from './styles.js'
import {BtnICon} from "../../Btns/Btns";
import Icon from "react-native-vector-icons/Ionicons";

export const AmountBox = ({amount,id}) => {
    return (
        <Container>
            <BtnICon onPress={_=>console.log(`${id}+`)} ><Icon name="add" color={'#5b42b4'} size={30} /></BtnICon>
            <Amount>{amount}</Amount>
            <BtnICon onPress={_=>console.log(`${id}-`)}  ><Icon name="remove" color={'#5b42b4'} size={30} /></BtnICon>
        </Container>

    );
}
