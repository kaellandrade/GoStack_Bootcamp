import React from 'react';
import propsTypes from 'prop-types';
import { BtnICon, BtnText } from '../../Btns/Btns';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    Container,
    ImgProduct,
    TitleProduct,
    Price,
    GroupButton,
    TextDescription,
} from './styles';

const Card = ({ srcImg, title, price, totByItem,id, handleAddProduct }) => {
    return (
        <Container>
            <ImgProduct source={{ uri: srcImg }} />
            <TitleProduct>{title}</TitleProduct>
            <Price>{price}</Price>
            <GroupButton>
                <BtnICon background={'#5b42b4'}>
                    <Icon name="cart" color={'#ececec'} size={30} />
                    <TextDescription>{totByItem[id] || 0}</TextDescription>
                </BtnICon>
                <BtnText callbackPress={(_) => handleAddProduct(id)}>
                    <TextDescription>Adicionar ao carrinho</TextDescription>
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
