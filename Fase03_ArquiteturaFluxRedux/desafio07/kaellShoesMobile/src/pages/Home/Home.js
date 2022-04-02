import React from 'react';
import { Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Container, ProductsList } from './styles';
import Card from '../../components/Card/card';
import getNumbersRows from '../../util/getNumbersRows';
import { CARD_SIZE, MARGIN_CARD } from '../../util/consts';
import API from '../../services/api';
import { formatPrice } from '../../util/format';

/**
 * Recupera meus produtos da API
 */
const getProducts = async (setProducts) => {
    try {
        const response = await API.get('products');
        const data = response.data.map((product) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));
        setProducts(data);
    } catch (error) {
        Alert.alert('Error', 'Error ao recuperar os produtos', false);
    }
};

export default (_) => {
    const [products, setProducts] = useState([]);
    useEffect((_) => {
        getProducts(setProducts);
    }, []);

    return (
        <Container>
            <ProductsList
                data={products}
                numColumns={getNumbersRows(CARD_SIZE + MARGIN_CARD)}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        price={item.priceFormatted}
                        srcImg={item.image}
                    />
                )}
            />
        </Container>
    );
};
