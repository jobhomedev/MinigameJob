import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import PecaGame from '../../assets/PecaGame.svg'

const flipAnimation = keyframes`
    0% {
        transform: perspective(600px) rotateY(0deg);
    }
    100% {
        transform: perspective(600px) rotateY(180deg);
    }
`;

export const GameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
    gap: 1rem;
    padding: 1rem;
    width:  100%;
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    border: 3px solid ${({ $matched }) => ($matched ? "#2cff00" : "#00000034")};
    border-radius: 0.5rem;
    animation: ${({ flipped }) => (flipped ? 'none' : flipAnimation)} 1s cubic-bezier(0.25, 0.1, 0.25, 1);    
    animation-fill-mode: forwards;
    perspective: 1000px;
    position: relative;
    transform-style: preserve-3d;
    aspect-ratio: 1/1;
`;

export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${PecaGame});
    background-size: cover;
    transform: rotateY(180deg);
`;

export const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    transform: rotateY(180deg);
`;

export const GameOverContainer = styled.div`
    font-size: min(5vw, 60px);
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
    width: 100%;

`

export const LifesAndTimer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    right: 1rem;
    position: relative;
    color: #efefef;
    font-size: 2.5rem;
`

export const LogoLifes = styled.img`
    padding: 0 0 0 0;
`

export const Reload = styled.a`
    font-size: 2.5rem;
    color: #eee;
    display: flex;
    align-items: center;
    margin: 0.5rem;
    font-family: 'Hanken Grotesk';
`