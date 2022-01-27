import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header() {
    const totitems = useSelector(({ cart }) => cart.length);
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Kaell Shoes" />
            </Link>
            <Cart>
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{totitems}</span>
                </div>
                <MdShoppingBasket size={30} color="#FFF" />
            </Cart>
        </Container>
    );
}

export default Header;
