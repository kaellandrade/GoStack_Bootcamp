import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    color: #000;
    flex: 0.9;
    height: 40px;
`;

export const InputIcon = styled.View`
    background: #e1e1e1;
    border-radius: 4px;
    padding: 0 5px;
    border: 1px solid #8e8e8e;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
`;
