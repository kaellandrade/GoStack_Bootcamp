import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from 'react-redux';
import DefaultLayout from '../pages/_layouts/default';
import AuthLayout from '../pages/_layouts/auth';
/**
 * Protege as rotas.
 * @param children
 * @returns {JSX.Element|*}
 * @constructor
 */
export default function ProtectedRoute({children, isPrivate}) {

	const signed =  useSelector(({auth})=>auth.signed);
	const Layout = signed ? DefaultLayout : AuthLayout;

	const {pathname} = useLocation();

	// Se Usuário não estiver logado e a rota ffor privada.
	if (!signed && isPrivate) {
		return <Navigate to="/" replace/>
	}

	// Se Estiver logado e tentar acessar a tela de login ou de registro.
	if (signed && ['/', '/register'].includes(pathname)) {
		return <Navigate to={"/dashboard"}/>
	}

	return <Layout>{children}</Layout>;
}
