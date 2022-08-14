import styled from 'styled-components';

const Container = styled.header`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;
const Time = styled.li`
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.49);
  cursor: pointer;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  font-size: 20px;
  font-weight: normal;
  border-left: 5px solid ${props => {
    let color = '#9ea7ad';
    if (props.opened && !props.past) {
      color = '#56f000';
    }
    if (!props.available) {
      color = '#ff3838';
    }
    return color;
  }
  };

  opacity: ${props => props.past ? 0.6 : 1};


  strong {
    display: flex;
    color: ${props => props.available ? '#999' : '#7159C1'};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => props.available ? '#999' : '#666'};
  }
`;

export {Container, Time};