import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
`;

const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    svg {
        animation: ${rotate} 2s linear infinite;
    }
`;
const Owner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
        margin-left: 20px;
    }
    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }
    h1 {
        font-size: 24px;
    }
    p {
        font-size: 14px;
        color: #768390;
        max-width: 400px;
    }
`;

const ButtonBack = styled.div`
    left: 15px;
    top: 15px;
    position: absolute;
    a{
        transition: 1s;
        color: #cdd9e5;
    }
    a:hover{
        color: #768390;
    }
`;

export { Owner, Loading, ButtonBack };
