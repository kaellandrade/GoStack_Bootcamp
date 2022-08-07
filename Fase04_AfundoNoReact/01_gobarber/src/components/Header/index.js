import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Container, Content, Profile} from './styles';
import logo from '../../assets/headerPurple.svg'
import Notifications from "../Notifications";
import {AVATAR_IMG_DEFAULT} from "../../consts/profile";

/**
 * Componente header
 * @returns {JSX.Element}
 * @constructor
 */
function Header() {
	const {name,avatar} = useSelector(({user}) => user.profile);
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
						<img src={ avatar ? avatar.url : AVATAR_IMG_DEFAULT} alt="Imagem perfil"/>
					</Profile>
				</aside>

			</Content>
		</Container>
	);
}

export default Header;
