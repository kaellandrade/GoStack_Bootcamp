import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Container, ProductsList } from './styles';
import Card from '../../components/Card/card';
import getNumbersRows from '../../util/getNumbersRows';
import { CARD_SIZE, MARGIN_CARD } from '../../util/consts';
import API from '../../services/api';
import { formatPrice } from '../../util/format';
import { addToCartRequest } from '../../store/actions/cart';

/**
 * @version 1.0
 * @param setProducts
 * @returns {Promise<void>}
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
    const [loading, setLoading] = useState(true);

    useEffect((_) => {
        getProducts(setProducts).then(_ => setLoading(false))
    }, []);

    const dispatch = useDispatch();
    // TODO const navigate = useNavigate()

    const handleAddProduct = (id) => {
        dispatch(addToCartRequest(id, undefined));
    };

    const totByItem = useSelector(({ cart }) => cart).reduce(
        (amount, product) => {
            amount[product.id] = product.amount;
            return amount;
        },
        {}
    );

    return (
        <Container>
            <ProductsList
                onRefresh={_=>getProducts(setProducts)}
                refreshing={loading}
                data={products}
                numColumns={getNumbersRows(CARD_SIZE + MARGIN_CARD)}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        price={item.priceFormatted}
                        srcImg={item.image}
                        id={item.id}
                        totByItem={totByItem}
                        handleAddProduct={handleAddProduct}
                    />
                )}
            />
        </Container>
    );
};
