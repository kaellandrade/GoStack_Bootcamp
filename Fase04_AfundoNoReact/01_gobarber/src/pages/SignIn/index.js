import {Fragment} from 'react';
import * as Yup from 'yup';
import {MdMail, MdLock} from 'react-icons/md';
import {Link, useLocation} from "react-router-dom";
import {Form} from '@rocketseat/unform';
import {useDispatch, useSelector} from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputIcon from "../../components/inputIcon";
import {signInRequest} from "../../store/modules/auth/actions";

/**
 * Tela de login da aplicação.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SignIn = () => {
	const {state} = useLocation(); // Caso o usuário venha da página de cadastro.
	const dispatch = useDispatch();
	const {loading} = useSelector(({auth}) => auth);
	/**
	 * Realiza o submit dos dados.
	 * @param data
	 */
	const handleSubmit = ({email, password}) => {
		dispatch(signInRequest(email, password))
	}

	const schema = Yup.object().shape({
		email: Yup.string().email('E-mail inválido!').required('E-mail obrigatório!'),
		password: Yup.string().required('A senha e obrigatória!')
	});

	return (
		<Fragment>
			<img src={Logo} alt="GoBarber"/>
			<Form schema={schema} onSubmit={handleSubmit}>
				<InputIcon value={state ? state.email : ''} name='email' CompIcon={MdMail}
						   inputPlaceholder='Seu email'
						   inputType='email'/>
				<InputIcon name='password' CompIcon={MdLock} inputPlaceholder='Sua senha' inputType='password'/>

				<Button type="submit" disabled={loading}>
					{loading ?
						<Fragment>
							<Spinner variant='light' size="sm" animation="grow"/>
							<span> Carregando...</span>
						</Fragment>
						:
						'Acessar'}
				</Button>
				<Link to="/register">Criar conta gratuita</Link>
			</Form>
		</Fragment>
	);
}


export default SignIn;
