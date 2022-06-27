import styled from 'styled-components';

const InputIconContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding-left: 15px;


  svg {
    color: rgba(255, 255, 255, 0.7);
    transform: scale(1.5);

  }

  span {
    color: rgb(255, 122, 122);
    width: 300px;
    text-align: left;
    font-weight: bold;
    font-size: 12px;

    &:before {
    }
  }
`;
export {InputIconContainer};
