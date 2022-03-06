import * as React from 'react';
import { Container, ProductsList } from './styles';
import Card from '../../components/Card/card';
import DATA from '../../../server.json';
import getNumbersRows from '../../util/getNumbersRows';
import { CARD_SIZE, MARGIN_CARD } from '../../util/consts';

export default (_) => {
    return (
        <Container>
            <ProductsList
                data={DATA.products}
                numColumns={getNumbersRows(CARD_SIZE + MARGIN_CARD)}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        price={item.price}
                        srcImg={item.image}
                    />
                )}
            />
        </Container>
    );
};
