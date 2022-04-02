import React from 'react';
import propsTypes from 'prop-types';
import {BtnICon, BtnText} from '../Btns/Btns';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';

import { Container, ImgProduct, TitleProduct, Price,GroupButton  } from './styles';

const Card = ({ srcImg, title, price }) => {
    return (
        <Container>
            <ImgProduct source={{ uri: srcImg }} />
            <TitleProduct>{title}</TitleProduct>
            <Price>{price}</Price>
            <GroupButton>
                <BtnICon>
                    <Icon name="cart" color={'#ececec'} size={30} />
                    <Text>2</Text>
                </BtnICon>
                <BtnText>
                    <Text>Adicionar ao Carrinho</Text>
                </BtnText>
            </GroupButton>
        </Container>
    );
};

Card.prototype = {
    srcImg: propsTypes.string,
    title: propsTypes.string.isRequired,
    price: propsTypes.number.isRequired,
};

export default Card;
