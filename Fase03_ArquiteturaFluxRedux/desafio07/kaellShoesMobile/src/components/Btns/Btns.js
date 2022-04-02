import React from 'react';
import { BtnRectText,BtnRect } from './styles';

const BtnText = (props) => {
    return <BtnRectText>{props.children}</BtnRectText>;
};

const BtnICon = (props) => {
    return <BtnRect>{props.children}</BtnRect>;
};


export {BtnText,BtnICon};
