import {Fragment} from 'react';
import * as Yup from 'yup';
import {MdMail, MdLock} from 'react-icons/md';
import {Link} from "react-router-dom";
import {Form} from '@rocketseat/unform';
import {useDispatch} from "react-redux";
import Logo from '../../assets/logo.svg';
import InputIcon from "../../components/inputIcon";
import {signInRequest} from "../../store/modules/auth/actions";


/**
 * Tela de login da aplicação.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SignIn = () => {
	const dispatch = useDispatch();
	/**
	 * Realiza o submit dos dados.
	 * @param data
	 */
	const handleSubmit = ({email, password}) => {
		dispatch(signInRequest(email, password))
	}

	const schema = Yup.object().shape({
		email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
		password: Yup.string().required('A senha e obrigatória')
	});

	return (
		<Fragment>
			<img src={Logo} alt="GoBarber"/>
			<Form schema={schema} onSubmit={handleSubmit}>
				<InputIcon name='email' CompIcon={MdMail} inputPlaceholder='Seu email' inputType='email'/>
				<InputIcon name='password' CompIcon={MdLock} inputPlaceholder='Sua senha' inputType='password'/>

				<button type="submit">Acessar</button>
				<Link to="/register">Criar conta gratuita</Link>
			</Form>
		</Fragment>
	);
}


export default SignIn;
