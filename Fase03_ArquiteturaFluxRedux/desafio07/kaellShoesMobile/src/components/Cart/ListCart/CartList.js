import React from 'react';
import {useSelector} from 'react-redux';
import Item from '../../../components/Card/CardList/CardItem';
import {
    ListItems,
    ContainerItems,
    PurchaseContainer,
    PurcheseTotalContainer,
    PurcheseTotalPrice,
    PurcheseTotalTitle, PurchaseContainerBtn, TextPurcheseBtn
} from './styles.js';
import {Text, View} from "react-native";
import {formatPrice} from "../../../util/format";
import {TextDescription} from "../../Card/Card/styles";
import {BtnICon, BtnText} from "../../Btns/Btns";
import Icon from "react-native-vector-icons/Ionicons";

const ListCart = (props) => {
    const items = useSelector(({cart}) => cart);
    return (
        <ContainerItems>
            <ListItems
                data={items}
                renderItem={({item}) => (
                    <Item
                        title={item.title}
                        priceFormatted={item.priceFormatted}
                        price={item.price}
                        srcImg={item.image}
                        id={item.id}
                        amount={item.amount}
                    />
                )}
            />
            <PurchaseContainer>
                <PurcheseTotalContainer>
                    <PurcheseTotalTitle>TOTAL</PurcheseTotalTitle>
                    <PurcheseTotalPrice>{formatPrice(props.total)}</PurcheseTotalPrice>
                </PurcheseTotalContainer>
                <PurchaseContainerBtn>
                    <BtnICon flex={1} onPress={_ => console.log('FIM!')} background={'#5b42b4'}>
                        <TextPurcheseBtn>FINALIZAR MEU PEDIDO </TextPurcheseBtn>
                        <Icon name="happy" color={'#ececec'} size={30}/>
                    </BtnICon>
                </PurchaseContainerBtn>
            </PurchaseContainer>
        </ContainerItems>
    );
}

export default ListCart;
