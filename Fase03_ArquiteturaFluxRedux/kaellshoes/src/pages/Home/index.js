import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import API from '../../services/api';

import { formatPrice } from '../../util/format';

import { addToCart } from '../../store/actions/cart';

const renderProducts = (products, totByItem) => {
    const dispatch = useDispatch();
    const handleAddProduct = (product) => {
        dispatch(addToCart(product));
    };

    return products.map((product) => (
        <li key={product.id}>
            <figure>
                <img src={product.image} />
                <figcaption>{product.title}</figcaption>
                <span>{product.priceFormatted}</span>
            </figure>
            <button type="button" onClick={(_) => handleAddProduct(product)}>
                <div>
                    <MdAddShoppingCart size={16} color="#FFF" />
                    {totByItem[product.id] || 0}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
            </button>
        </li>
    ));
};

function Home() {
    const totByItem = useSelector(({ cart }) => cart).reduce(
        (amount, product) => {
            amount[product.id] = product.amount;
            return amount;
        },
        {}
    );
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await API.get('products');

            const data = response.data.map((product) => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return <ProductList>{renderProducts(products, totByItem)}</ProductList>;
}

export default Home;
