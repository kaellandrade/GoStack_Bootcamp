import {Fragment} from 'react';
import {MdMail, MdLock} from 'react-icons/md';
import {Link} from "react-router-dom";
import {Form} from '@rocketseat/unform';
import Logo from '../../assets/logo.svg';
import InputIcon from "../../components/inputIcon";

/**
 * Realiza o submit dos dados.
 * @param data
 */
const handleSubmit = (data) => {
	console.tron.log(data);
}

/**
 * Tela de login da aplicação.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SignIn = () => (
	<Fragment>
		<img src={Logo} alt="GoBarber"/>
		<Form onSubmit={handleSubmit}>
			<InputIcon name='email' CompIcon={MdMail} inputPlaceholder={'Seu email'} inputType={'email'}/>
			<InputIcon name='password' CompIcon={MdLock} inputPlaceholder={'Sua senha'} inputType={'password'}/>

			<button type="submit">Acessar</button>
			<Link to="/register">Criar conta gratuita</Link>
		</Form>
	</Fragment>
);


export default SignIn;
