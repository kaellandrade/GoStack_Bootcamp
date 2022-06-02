import React from 'react';
import {useSelector} from 'react-redux';
import Item from '../../../components/Card/CardList/CardItem';
import {ListItems, ContainerItems} from './styles.js';

const ListCart = () => {
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
        </ContainerItems>
    );
}

export default ListCart;
