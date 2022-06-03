import styled from 'styled-components';

export const ContainerItems = styled.View`
    flex: 1;
    background-color: #282a36;
`;


export const ListItems = styled.FlatList`
    flex: 0.9;
`;

export const PurchaseContainer = styled.View`
    border-top-left-radius: 30px;
    border-bottom-right-radius: 10px;
    flex-direction: row;
    flex: 0.1;
    background-color: #ffff;
`;

export const PurcheseTotalTitle = styled.Text`
    color: rgba(58, 55, 55, 0.61);
    font-size: 25px;
    font-weight: bold;
`;

export const PurcheseTotalPrice = styled.Text`
    color: #5b42b4;
    font-weight: bold;
    font-size: 30px;
`;

export const PurcheseTotalContainer = styled.View`
    flex: 0.4;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const PurchaseContainerBtn = styled.View`
    flex: 1;
    justify-content: center;
`;
export const TextPurcheseBtn = styled.Text`
    font-size: 30px;
    justify-content: center;
    text-align: center;
`;
