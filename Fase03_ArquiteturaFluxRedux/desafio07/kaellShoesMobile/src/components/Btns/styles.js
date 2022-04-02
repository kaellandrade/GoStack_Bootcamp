import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const BtnRect = styled(RectButton)`
    flex: .2;
    flex-direction: row;
    align-items: center;
    opacity: ${(props) => (props.loading ? 0.7 : 1)};
    background-color: #5b42b4;
`;
export const BtnRectText = styled(RectButton)`
    opacity: ${(props) => (props.loading ? 0.7 : 1)};
    background-color: #624db6;
    justify-content: center;
    flex: .8;
`;
