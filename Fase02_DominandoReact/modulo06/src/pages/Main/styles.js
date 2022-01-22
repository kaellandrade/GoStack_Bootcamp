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
    border-color: #d6d6d6;
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
    border: 1px solid #d6d6d6;
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
    opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;
export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const User = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    margin: 10px 0px;
`;
export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: #eee;
`;
export const Name = styled.Text`
    font-size: 15px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
`;
export const Profile = styled.View`
    margin-left: 3px;
    flex: 1;
`;
export const Bio = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: #d6d6d6;
`;
