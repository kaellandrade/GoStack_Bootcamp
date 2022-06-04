import React from 'react';
import {AmountBox} from '../../Cart/AmountBox/AmountBox';
import {ItemContainer, ItemImg, Description, Price, Item, ItemFooter, ItemHeader,ItemDescription} from './styles.js';
import {formatPrice} from "../../../util/format";
import {BtnICon} from "../../Btns/Btns";
import Icon from "react-native-vector-icons/Ionicons";
import {removeToCartRequest} from "../../../store/actions/cart";
import {useDispatch} from "react-redux";

const CardItem = ({title, price, srcImg, id, amount, priceFormatted}) => {
    const calculateTotalFormatted = (amount, price) => formatPrice(amount * price);
    const dispatch = useDispatch();

    const handleRemoveProduct = (id) => {
        dispatch(removeToCartRequest(id));
    };

    return (
        <ItemContainer>
            <Item>
                <ItemHeader>
                    <ItemImg source={{uri: srcImg}}/>
                    <ItemDescription>
                        <Description>{title}</Description>
                        <Price>{priceFormatted}</Price>
                    </ItemDescription>
                    <BtnICon onPress={_=>handleRemoveProduct(id)}><Icon name="trash" color={'#5b42b4'} size={30} /></BtnICon>
                </ItemHeader>
                <ItemFooter>
                    <AmountBox id={id} amount={amount}></AmountBox>
                    <Price>{calculateTotalFormatted(amount, price)}</Price>
                </ItemFooter>
            </Item>
        </ItemContainer>
    );
}
export default CardItem;
