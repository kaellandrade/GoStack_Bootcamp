import styled from 'styled-components';
import {darken} from 'polished';

const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

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

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #ffff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }

  a {
    color: #FFF;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export {Wrapper, Content};
