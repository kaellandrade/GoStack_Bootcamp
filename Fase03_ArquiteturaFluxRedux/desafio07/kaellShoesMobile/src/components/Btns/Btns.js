import React from 'react';
import { BtnRectText, BtnRect } from './styles';

const BtnText = ({ children, handleAddProduct }) => {
    return (
        <BtnRectText onPress={handleAddProduct}>{children}</BtnRectText>
    );
};

const BtnICon = (props) => {
    return <BtnRect>{props.children}</BtnRect>;
};

export { BtnText, BtnICon };
