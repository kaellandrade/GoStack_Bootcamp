import styled from 'styled-components';

const InputIconContainer = styled.div`
  margin-top: 10px;
  align-items: center;

  input {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 0;
    height: 44px;
    padding-left: 32px;
    color: #FFFF;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    width: 100%;

  }
  
  svg {
    color: rgba(255, 255, 255, 0.7);
    position: absolute;
    margin-top: 15px;
    margin-left: 10px;
    transform: scale(1.5);
  }

  span {
    color: rgba(107, 0, 26, 0.82);
    font-size: 15px;
    font-weight: bold;
    margin: 5px 0 5px;
    display: inline-block;
  }
`;
export {InputIconContainer};
