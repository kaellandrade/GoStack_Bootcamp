import PropTypes from "prop-types";
import {Wrapper, Content} from './styles';

/**
 * Layout autenticação
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const AuthLayout = ({children}) => (
	<Wrapper>
		<Content>{children}</Content>
	</Wrapper>
);
AuthLayout.prototype = {
	children: PropTypes.element.isRequired
}

export default AuthLayout;
