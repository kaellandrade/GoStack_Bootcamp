import PropTypes from "prop-types";
import {Wrapper} from './styles';
import Header from "../../../components/Header";

/**
 * Layout autenticação
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const DafaulLayout = ({children}) => (
		<Wrapper>
			<Header/>
			{children}
		</Wrapper>
	);
DafaulLayout.prototype = {
	children: PropTypes.element.isRequired
}

export default DafaulLayout;
