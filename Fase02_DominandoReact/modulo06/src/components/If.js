import React from 'react';
import { NoData, Label, ImgNoData } from './styles';
import image from '../../assets/no_data.png';
const IfRender = (props) => {
    if (props.condition) {
        return props.children;
    } else {
        return (
            <NoData>
                <ImgNoData resizeMode="center" source={image}/>
                <Label>Sem repositórios favoritos!</Label>
            </NoData>
        );
    }
};

export default IfRender;
