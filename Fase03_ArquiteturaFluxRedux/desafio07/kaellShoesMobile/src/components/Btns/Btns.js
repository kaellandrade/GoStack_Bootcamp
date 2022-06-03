import React from 'react';
import { BtnRectText, BtnRect } from './styles';

const BtnText = ({ children, callbackPress }) => {
    return (
        <BtnRectText onPress={callbackPress}>{children}</BtnRectText>
    );
};

const BtnICon = (props) => {
    return <BtnRect flex={props.flex} onPress={props.onPress} background={props.background}>{props.children}</BtnRect>;
};

export { BtnText, BtnICon };
