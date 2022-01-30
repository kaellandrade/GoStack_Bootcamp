import { useSelector, useDispatch } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, Total, ProductTable } from './styles';
import { formatPrice } from '../../util/format';
import { removeToCart, updateAmount } from '../../store/actions/cart';

const renderCart = (carrinho) => {
    const dispatch = useDispatch();

    const increment = (product) => {
        dispatch(updateAmount(product.id, product.amount + 1));
    };

    const decrement = (product) => {
        dispatch(updateAmount(product.id, product.amount - 1));
    };

    return carrinho.map((item, index) => (
        <tr key={index}>
            <td>
                <img alt={item.title} src={item.image} />
            </td>
            <td>
                <strong>{item.title}</strong>
                <span>{item.priceFormatted}</span>
            </td>
            <td>
                <div>
                    <button type="button">
                        <MdRemoveCircleOutline
                            size={20}
                            color="#7150c1"
                            onClick={(_) => decrement(item)}
                        />
                    </button>
                    <input type="number" readOnly value={item.amount} />
                    <button type="button">
                        <MdAddCircleOutline
                            size={20}
                            color="#7150c1"
                            onClick={(_) => increment(item)}
                        />
                    </button>
                </div>
            </td>
            <td>
                <strong>{formatPrice(item.amount * item.price)}</strong>
            </td>
            <td>
                <button
                    type="button"
                    onClick={(_) => dispatch(removeToCart(item.id))}
                >
                    <MdDelete size={20} color="#7159c1" />
                </button>
            </td>
        </tr>
    ));
};

function Cart() {
    const carrinho = useSelector(({ cart }) => cart);
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTDO</th>
                        <th>QTD</th>
                        <th>QTDSUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{renderCart(carrinho)}</tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 1920,23</strong>
                </Total>
            </footer>
        </Container>
    );
}

export default Cart;
