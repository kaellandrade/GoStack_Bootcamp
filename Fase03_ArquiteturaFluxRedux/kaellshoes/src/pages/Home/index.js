import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import API from '../../services/api';

import { formatPrice } from '../../util/format';

import { addToCart } from '../../store/actions/cart';

const renderProducts = (products) => {
    const dispatch = useDispatch();
    const cartSize = useSelector(({ cart }) => cart.length);

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
                    <MdAddShoppingCart size={16} color="#FFF" /> {cartSize}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
            </button>
        </li>
    ));
};

function Home() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await API.get('products');

            const data = response.data.map((product) => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return <ProductList>{renderProducts(products)}</ProductList>;
}

export default Home;
