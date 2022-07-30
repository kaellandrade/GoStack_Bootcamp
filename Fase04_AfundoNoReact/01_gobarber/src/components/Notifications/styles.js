import styled, {css, keyframes} from 'styled-components';
import {lighten} from 'polished'
import PerfectScrollBar from 'react-perfect-scrollbar';
import {MdNotifications} from 'react-icons/md'


const bellAnimation = keyframes`
  0% {
    transform: rotateZ(0);
  }
  1% {
    transform: rotateZ(30deg);
  }
  3% {
    transform: rotateZ(-28deg);
  }
  5% {
    transform: rotateZ(34deg);
  }
  7% {
    transform: rotateZ(-32deg);
  }
  9% {
    transform: rotateZ(30deg);
  }
  11% {
    transform: rotateZ(-28deg);
  }
  13% {
    transform: rotateZ(26deg);
  }
  15% {
    transform: rotateZ(-24deg);
  }
  17% {
    transform: rotateZ(22deg);
  }
  19% {
    transform: rotateZ(-20deg);
  }
  21% {
    transform: rotateZ(18deg);
  }
  23% {
    transform: rotateZ(-16deg);
  }
  25% {
    transform: rotateZ(14deg);
  }
  27% {
    transform: rotateZ(-12deg);
  }
  29% {
    transform: rotateZ(10deg);
  }
  31% {
    transform: rotateZ(-8deg);
  }
  33% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  37% {
    transform: rotateZ(2deg);
  }
  39% {
    transform: rotateZ(-1deg);
  }
  41% {
    transform: rotateZ(1deg);
  }

  43% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(0);
  }`;

export const AnimationBell = styled(MdNotifications)`

  ${props => props.sing && css`
    animation-name: ${bellAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  `}`;
export const NumberNotification = styled.span`
  border-radius: 6px;
  padding: 1px 6px 1px;
  position: absolute;
  right: -12px;
  top: -5px;
  background: #ff892e;
  z-index: 1;
  color: #ffffff;
  font-weight: bold;
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const NotificationsList = styled.div`
  transition: linear 1s linear;
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgb(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${({visible}) => visible ? 'block' : 'none'};
}

;

&::before {
  content: '';
  position: absolute;
  left: calc(50% - 20px);
  top: -20px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid rgb(0, 0, 0, 0.6);
}
`;
export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
    display: block;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
  }

  ${props => props.unread && css`
    &::after {
      content: '';
      display: inline-block;
      margin-left: 5px;
      width: 8px;
      height: 8px;
      background: #ff892e;
      border-radius: 50%;
      margin-left: 10px;
    }
  `}
`;

export const Container = styled.div`
  position: relative;

`;
export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;
