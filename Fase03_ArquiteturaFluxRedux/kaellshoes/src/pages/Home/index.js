import { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import API from '../../services/api';

import { formatPrice } from '../../util/format';

const renderProducts = (products) =>
    products.map(({ id, image, title, priceFormatted }) => (
        <li key={id}>
            <figure>
                <img src={image} />
                <figcaption>{title}</figcaption>
                <span>{priceFormatted}</span>
            </figure>
            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
            </button>
        </li>
    ));

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
