import styled from "styled-components";

export const ItemContainer = styled.View`
    flex-direction: row;
    margin: 0 5px 10px;
    background-color: white;
    border-radius: 10px;
`;

export const ItemImg = styled.Image`
    width: 100px;
    height: 100px;
`;

export const Description = styled.Text`
    font-size: 17px;
    color: rgba(0, 0, 0, 0.89);
`;

export const Price = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 19px;
`;

export const Item = styled.View`
    flex: 1;
`;

export const ItemFooter = styled.View`
    flex: 0.5;
    flex-direction: row;
    background-color: #ececec;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 10px;

`;

export const ItemHeader = styled.View`
    flex: 0.5;
    flex-direction: row;
    background-color: #ffffff;
    align-items: center;
    padding: 0 20px 0;
`;

export const ItemDescription = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 0 20px 0;
`;
