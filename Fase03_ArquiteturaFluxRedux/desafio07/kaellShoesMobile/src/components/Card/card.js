import React from 'react';
import propsTypes from 'prop-types';

import { Container, ImgProduct, TitleProduct, Price } from './styles';

const Card = ({ srcImg, title, price }) => {
    return (
        <Container>
            <ImgProduct resize="contain" source={{ uri: srcImg }} />
            <TitleProduct>{title}</TitleProduct>
            <Price>{price}</Price>
            {/*TODO: <BtnIcon/> */}
        </Container>
    );
};

Card.prototype = {
    srcImg: propsTypes.string,
    title: propsTypes.string.isRequired,
    price: propsTypes.number.isRequired,
};

export default Card;
