import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
    return (
        <ProductList>
            <li>
                <figure>
                    <img src="https://imgcentauro-a.akamaihd.net/250x250/96159631A1/tenis-nike-wearallday-feminino-img.jpg" />
                    <figcaption>Tênis muito legal.</figcaption>
                    <span>R$129,90</span>
                </figure>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <figure>
                    <img src="https://imgcentauro-a.akamaihd.net/250x250/96159631A1/tenis-nike-wearallday-feminino-img.jpg" />
                    <figcaption>Tênis muito legal.</figcaption>
                    <span>R$129,90</span>
                </figure>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <figure>
                    <img src="https://imgcentauro-a.akamaihd.net/250x250/96159631A1/tenis-nike-wearallday-feminino-img.jpg" />
                    <figcaption>Tênis muito legal.</figcaption>
                    <span>R$129,90</span>
                </figure>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <figure>
                    <img src="https://imgcentauro-a.akamaihd.net/250x250/96159631A1/tenis-nike-wearallday-feminino-img.jpg" />
                    <figcaption>Tênis muito legal.</figcaption>
                    <span>R$129,90</span>
                </figure>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <figure>
                    <img src="https://imgcentauro-a.akamaihd.net/250x250/96159631A1/tenis-nike-wearallday-feminino-img.jpg" />
                    <figcaption>Tênis muito legal.</figcaption>
                    <span>R$129,90</span>
                </figure>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <figure>
                    <img src="https://imgcentauro-a.akamaihd.net/250x250/96159631A1/tenis-nike-wearallday-feminino-img.jpg" />
                    <figcaption>Tênis muito legal.</figcaption>
                    <span>R$129,90</span>
                </figure>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}

export default Home;
