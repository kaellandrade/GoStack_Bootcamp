import styled from 'styled-components';
import { CARD_SIZE, MARGIN_CARD } from '../../util/consts';
export const Container = styled.View`
    width: ${CARD_SIZE}px;
    height: 400px;
    align-items: center;
    justify-content: center;
    margin: ${MARGIN_CARD}px;
    background-color: #ffffff;
    border-radius: 8px;
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
