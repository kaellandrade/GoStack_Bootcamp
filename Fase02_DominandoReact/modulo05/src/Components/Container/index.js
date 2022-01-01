import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    max-width: 700px;
    background-color: #22272e;
    border-radius: 6px;
    box-shadow: 0 0 20px rgb(209, 209, 209, 0.1);
    padding: 30px;
    margin: 80px auto;
    border: 1px solid #404852;
    h1 {
        color: #d1d1d1;
        font-size: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        svg {
            margin-right: 10px;
        }
    }
`;

export default Container;
