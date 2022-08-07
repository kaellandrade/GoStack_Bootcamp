import {Fragment} from "react";
import {Form} from '@rocketseat/unform';
import {MdAccountCircle, MdLock, MdMail, MdPassword, MdLockOutline, MdOutlineSend, MdLogout} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import {BtnUpdate, Container} from './styles';
import InputIcon from "../../components/inputIcon";
import {updateProfileReques} from "../../store/modules/users/actions";
import {AvatarInput} from './AvataraInput/index';
import {signOut} from "../../store/modules/auth/actions";
/**
 * Página do perfil do usuário.
 * @returns {JSX.Element}
 * @constructor
 */
const Profile = () => {
	const {email, name} = useSelector(({user}) => user.profile);
	const dispatch = useDispatch();
	const {profile} = useSelector(({user}) => user);


	const handleSubmit = (data) => {
		dispatch(updateProfileReques(data));
	}

	const handleSingout = () => {
		dispatch(signOut())
	}

	return (
		<Container>
			<Form initialData={profile} onSubmit={handleSubmit}>
				<AvatarInput name="avatar_id"/>
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

				<BtnUpdate type="submit" disabled={profile.loading}>
					{profile.loading ?
						<Fragment>
							<Spinner variant='light' size="sm" animation="grow"/>
							<span> Atualizando...</span>
						</Fragment>
						:
						<Fragment>
							Atualizar Perfil <MdOutlineSend size={25}/>
						</Fragment>
					}
				</BtnUpdate>
			</Form>
			<button onClick={handleSingout} type="submit">
				Sair do GoBarber <MdLogout size={25}/>
			</button>
		</Container>
	);
}

export default Profile;
