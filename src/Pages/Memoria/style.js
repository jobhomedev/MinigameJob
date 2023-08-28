import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const flipAnimation = keyframes`
    0% {
        transform: perspective(600px) rotateY(0deg);
    }
    100% {
        transform: perspective(600px) rotateY(180deg);
    }
`;

const flashAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`;

export const GameOverContainer = styled.div`
    font-size: 60px;
    color: #efefef;
    display: flex;
    justify-content: center;
    flex-direction: column;

`

export const GameOver = styled.h2`
    font-family: 'Hanken Grotesk';
    text-decoration: none;
`

export const GameOverOptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10rem;
`

export const GameOverOption = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    font-family: 'Hanken Grotesk';
    color: #fff;
`

export const Peca = styled.button`
    display: flex;
    align-items: center;
    animation: ${flipAnimation} 1s ease-in-out;
`

export const LogoPeca = styled.img`
    display: flex;
    margin-right: 0.5rem;
    padding: 0.5rem;
`

export const LifesAndTimerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: min(30rem, 100%);

`

export const LifesAndTimer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    right: 1rem;
    position: relative;
    color: #efefef;
`

export const LogoLifes = styled.img`
    padding: 0 0 0 0;
`

export const Reload = styled.a`
    
    color: #eee;
    display: flex;
    align-items: center;
    margin: 0.5rem;
    font-family: 'Hanken Grotesk';
`