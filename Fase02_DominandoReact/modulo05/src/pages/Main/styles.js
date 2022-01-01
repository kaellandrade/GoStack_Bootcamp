import styled, { keyframes, css } from 'styled-components';

const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #404852;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        background-color: transparent;
        color: #cdd9e5;
        ::placeholder {
            color: #cdd9e561;
        }
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
`;

const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background-color: #347d39;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        background-color: #3a723e;
    }
    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${(props) =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

const List = styled.ul`
    list-style: none;
    margin-top: 30px;
    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #adbac7;
        & + li {
            border-top: 1px solid #444c56;
        }
        a {
            color: #539bf5;
            text-decoration: none;
            transition: 1s;
        }

        a:hover {
            color: #768390;
        }
    }
`;

export { Form, SubmitButton, List };
