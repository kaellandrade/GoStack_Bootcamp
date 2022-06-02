import styled from 'styled-components';
import { CARD_SIZE, MARGIN_CARD } from '../../../util/consts';

export const Container = styled.View`
    width: ${CARD_SIZE}px;
    height: 400px;
    align-items: center;
    justify-content: center;
    margin: ${MARGIN_CARD}px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 0px 10px 0px;
`;
export const ImgProduct = styled.Image`
    width: 260px;
    height: 260px;
`;
export const TitleProduct = styled.Text`
    color: black;
`;
export const Price = styled.Text`
    color: black;
`;

export const GroupButton = styled.View`
    flex-direction: row;
    width: 100%;
    height: 40px;
`;

export const TextDescription = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;
