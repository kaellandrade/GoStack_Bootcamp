import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Container, Content, Profile} from './styles';
import logo from '../../assets/headerPurple.svg'
import Avatar from '../../assets/avatar.jpeg'
import Notifications from "../Notifications";

/**
 * Componente header
 * @returns {JSX.Element}
 * @constructor
 */
function Header() {
	const {name} = useSelector(({user}) => user.profile);
	return (
		<Container>
			<Content>
				<nav>
					<img src={logo} alt="GoBarber"/>
					<Link to='/dashboard' >DASHBOARD</Link>
				</nav>

				<aside>
					<Notifications/>
					<Profile>
						<div>
							<strong>{name}</strong>
							<Link to="/profile">Meu Perfil</Link>
						</div>
						<img src={Avatar} alt="Imagem perfil"/>
					</Profile>
				</aside>

			</Content>
		</Container>
	);
}

export default Header;
