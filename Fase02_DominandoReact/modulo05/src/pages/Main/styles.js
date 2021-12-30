import styled, { keyframes, css } from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    background-color: #22272e;
    border-radius: 6px;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.1);
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
export { Container, Form, SubmitButton };
