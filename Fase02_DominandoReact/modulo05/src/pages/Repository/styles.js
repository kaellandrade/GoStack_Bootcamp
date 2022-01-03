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
    span {
        border-bottom: 1px solid #444c56;
        border-top: 1px solid #444c56;
        color: #adbac7;
        display: inline-block;
        margin-top: 5px;
        padding-top: 5px;
    }
`;

const ButtonBack = styled.div`
    left: 15px;
    top: 15px;
    position: absolute;
    a {
        transition: 1s;
        color: #cdd9e5;
    }
    a:hover {
        color: #768390;
    }
`;

const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #444c56;
    list-style: none;

    li {
        position: relative;
        display: flex;
        padding: 15px 10px;
        border: 1px solid #444c56;
        border-radius: 6px;
        & + li {
            margin-top: 10px;
        }
    }
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }
    div {
        flex: 0.9;
        margin-left: 15px;
        strong {
            font-size: 16px;
            a {
                transition: 1s;
                text-decoration: none;
                color: #539bf5;
                &:hover {
                    color: #768390;
                }
            }
        }
        p {
            color: #768390;
            margin-top: 5px;
            font-size: 12px;
        }
    }
`;

const Label = styled.span`
    color: black;
    background-color: ${(props) => `#${props.cor}`};
    border-radius: 2px;
    font-size: 12px;
    font-weight: 60;
    height: 20px;
    line-height: 15px;
    padding: 3px 4px;
    margin-left: 10px;
`;
const Select = styled.div`
    display: flex;
    justify-content: end;
    select {
        background-color: #373e47;
        border: 1px solid #cdd9e51a;
        color: #adbac7;
    }
`;
const State = styled.span`
    right: 0;
    top: 0;
    margin: 4px;
    position: absolute;
    border-radius: 2px;
    font-size: 10px;
    font-weight: bold;
    padding: 3px 4px;
    color: #fff;
    background-color: ${(props) =>
        props.state === 'closed' ? '#347d39' : '#c38000'};
`;

export { Owner, Loading, ButtonBack, IssueList, Label, Select, State };
