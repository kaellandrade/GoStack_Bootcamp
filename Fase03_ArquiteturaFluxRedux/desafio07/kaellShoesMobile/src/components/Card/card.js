import React from 'react';
import propsTypes from 'prop-types';
import BtnIcon from '../BtnIcon/BtnIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native'

import { Container, ImgProduct, TitleProduct, Price } from './styles';

const Card = ({ srcImg, title, price }) => {
    return (
        <Container>
            <ImgProduct source={{ uri: srcImg }} />
            <TitleProduct>{title}</TitleProduct>
            <Price>{price}</Price>
            <BtnIcon>
                <Icon name="cart" color={'#ececec'} size={30} />
                <Text>Adicionar ao Carrinho</Text>
            </BtnIcon>
        </Container>
    );
};

Card.prototype = {
    srcImg: propsTypes.string,
    title: propsTypes.string.isRequired,
    price: propsTypes.number.isRequired,
};

export default Card;
