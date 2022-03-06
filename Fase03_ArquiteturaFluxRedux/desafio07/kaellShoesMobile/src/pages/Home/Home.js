import * as React from 'react';
import { Container, ProductsList } from './styles';
import Card from '../../components/Card/card';
import DATA from '../../../server.json';
export default (_) => {
    return (
        <Container>
            <ProductsList
                data={DATA.products}
                numColumns={2} // TODO: Tornar cesse valor dinâmico
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
