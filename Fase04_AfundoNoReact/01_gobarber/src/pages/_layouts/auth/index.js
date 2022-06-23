import React from 'react';
import PropTypes from "prop-types";
import {Wrapper} from './styles';

/**
 * Layout autenticação
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const AuthLayout = ({children}) => (
		<Wrapper>
			{children}
		</Wrapper>
	);
AuthLayout.prototype = {
	children: PropTypes.element.isRequired
}

export default AuthLayout;
