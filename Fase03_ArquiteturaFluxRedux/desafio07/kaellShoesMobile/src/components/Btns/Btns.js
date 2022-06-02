import React from 'react';
import { BtnRectText, BtnRect } from './styles';

const BtnText = ({ children, handleAddProduct }) => {
    return (
        <BtnRectText onPress={handleAddProduct}>{children}</BtnRectText>
    );
};

const BtnICon = (props) => {
    return <BtnRect onPress={props.onPress} background={props.background}>{props.children}</BtnRect>;
};

export { BtnText, BtnICon };
