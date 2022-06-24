import {Fragment} from 'react';
import {Link} from "react-router-dom";
import {MdLock, MdMail, MdPerson} from "react-icons/md";
import {Form} from "@rocketseat/unform";
import Logo from "../../assets/logo.svg";
import InputIcon from "../../components/inputIcon";


/**
 * Tela de registrar na aplicação.
 * @returns {JSX.Element}
 * @constructor
 */
const SignUp = () => {
	/**
	 * Realiza o submit dos dados.
	 * @param data
	 */
	function handleSubmit(data) {
		console.tron.log(data);
	}

	return (
		<Fragment>
			<img src={Logo} alt="GoBarber"/>
			<Form onSubmit={handleSubmit}>
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
