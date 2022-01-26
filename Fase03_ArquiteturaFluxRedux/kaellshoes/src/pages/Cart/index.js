import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, Total, ProductTable } from './styles';

function Cart() {
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
                <tbody>
                    <tr>
                        <td>
                            <img
                                alt="Tênis"
                                src="https://imgcentauro-a.akamaihd.net/250x250/96159631A1/tenis-nike-wearallday-feminino-img.jpg"
                            />
                        </td>
                        <td>
                            <strong>Tênis muito massa</strong>
                            <span>R$129,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7150c1"
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#7150c1"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$259,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
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
