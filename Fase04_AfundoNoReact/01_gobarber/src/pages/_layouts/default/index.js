import PropTypes from "prop-types";
import {Wrapper} from './styles';

/**
 * Layout autenticação
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const DafaulLayout = ({children}) => (
		<Wrapper>
			{children}
		</Wrapper>
	);
DafaulLayout.prototype = {
	children: PropTypes.element.isRequired
}

export default DafaulLayout;
