import {Form, Input} from '@rocketseat/unform';
import {MdAccountCircle, MdLock, MdMail,MdPassword,MdLockOutline,MdOutlineSend,MdLogout} from "react-icons/md";
import {useSelector} from "react-redux";
import {Container} from './styles';
import InputIcon from "../../components/inputIcon";
/**
 * Página do perfil do usuário.
 * @returns {JSX.Element}
 * @constructor
 */
const Profile = () => {
	const {email, name} = useSelector(({user})=>user.profile);

	return (
		<Container>
			<Form>
				<InputIcon value={name} name='name' CompIcon={MdAccountCircle}
						   inputPlaceholder='Nome completo'
						   inputType='text'/>

				<InputIcon value={email} name='email' CompIcon={MdMail}
						   inputPlaceholder='Seu endereço de e-mail'
						   inputType='text'/>

				<hr/>

				<InputIcon value='' name='oldPassword' CompIcon={MdLockOutline}
						   inputPlaceholder='Sua senha atual'
						   inputType='password'/>

				<InputIcon value='' name='password' CompIcon={MdLock}
						   inputPlaceholder='Nova senha'
						   inputType='password'/>

				<InputIcon inputType="password" name="confirmPassword" inputPlaceholder="Confirme sua senha"
						   CompIcon={MdPassword}/>
				<button type="submit">
					Atualizar Perfil <MdOutlineSend size={25}/>
				</button>
			</Form>
			<button type="submit">
				Sair do GoBarber <MdLogout size={25}/>
			</button>
		</Container>
	);
}

export default Profile;
