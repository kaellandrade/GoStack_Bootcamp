import React from 'react';
import { Text } from 'react-native';
import { BtnRect } from './styles';

const BtnICon = (props) => {
    return <BtnRect>{props.children}</BtnRect>;
};

export default BtnICon;
