import {Fragment} from 'react';
import * as Yup from 'yup';
import {Link,useNavigate} from "react-router-dom";
import {MdLock, MdMail, MdPerson} from "react-icons/md";
import {Form} from "@rocketseat/unform";
import {useDispatch} from "react-redux";
import Logo from "../../assets/logo.svg";
import InputIcon from "../../components/inputIcon";
import {signUpRequest} from "../../store/modules/auth/actions";


/**
 * Tela de registrar na aplicação.
 * @returns {JSX.Element}
 * @constructor
 */
const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const schema = Yup.object().shape({
		name: Yup.string().min(3,'O nome precisa ter no mínimo 3 caracteres!').required('Precisa informar seu nome!'),
		email: Yup.string().email('E-mail inválido!').required('E-mail obrigatório!'),
		password: Yup.string().min(6,'A senha deve conter no mínimo 6 caracteres!').required('E-mail obrigatório!'),
		passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas são diferentes!')
	});

	/**
	 * Realiza o submit dos dados.
	 * @param data
	 */
	function handleSubmit({name, email, password}) {
		dispatch(signUpRequest(name, email, password, navigate));
	}

	return (
		<Fragment>
			<img src={Logo} alt="GoBarber"/>
			<Form schema={schema} onSubmit={handleSubmit}>
				<InputIcon name='name' CompIcon={MdPerson} inputPlaceholder='Nome Completo' inputType='text'/>
				<InputIcon name='email' CompIcon={MdMail} inputPlaceholder='Seu e-mail' inputType='email'/>
				<InputIcon name='password' CompIcon={MdLock} inputPlaceholder='Sua senha' inputType='password'/>
				<InputIcon name='passwordConfirm' CompIcon={MdLock} inputPlaceholder='Confirmar Senha'
						   inputType='password'/>

				<button type="submit">Criar conta</button>
				<Link to="/">Já tenho conta</Link>
			</Form>
		</Fragment>
	);
}

SignUp.propTypes = {};

export default SignUp;
