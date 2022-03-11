import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const BtnRect = styled(RectButton)`
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;
