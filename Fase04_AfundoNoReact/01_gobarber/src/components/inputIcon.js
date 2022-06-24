import PropTypes from 'prop-types';
import {Input} from '@rocketseat/unform';
import {InputIconContainer} from "./styles";

/**
 *
 * @param  inputType tipo do input
 * @param inputPlaceholder placeholder
 * @param CompIcon recebe um icone para renderizar ao lado esquerdo.
 * @returns {JSX.Element}
 * @constructor
 */
const InputIcon = ({inputType, inputPlaceholder, CompIcon, name}) => (
	<InputIconContainer>
		{CompIcon ? <CompIcon/> : null}
		<Input name={name} type={inputType} placeholder={inputPlaceholder}/>
	</InputIconContainer>
);

InputIcon.defaultProps = {
	inputType:'text',
	CompIcon:null
};

InputIcon.propTypes = {
	inputType: PropTypes.string.isRequired,
	inputPlaceholder: PropTypes.string.isRequired,
	CompIcon: PropTypes.func,
	name:PropTypes.string

};

export default InputIcon;
