import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

export const InfoCard = styled.View`
    background-color: #ffffff;
    width: 80%;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const NoItensText = styled.Text`
    font-size: 25px;
    color: #232323;
    font-weight: bold;
`;

export const IconCartOff = styled.View`
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const AlertIcon = styled(Icon)`
    position: absolute;
    top: 40px;
    right: 40px;
    opacity: 0.4;
`;
