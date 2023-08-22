import styled, { keyframes } from 'styled-components';

const flipAnimation = keyframes`
    0% {
        transform: perspective(600px) rotateY(0deg);
    }
    100% {
        transform: perspective(600px) rotateY(180deg);
    }
`;

export const GameOverContainer = styled.div`
    font-size: 60px;
    color: #efefef;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`

export const GameOver = styled.h1`
    font-family: 'Handjet';
    text-decoration: none;
`

export const GameOverOption = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-family: 'Handjet';
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
    position: absolute;
    bottom: 16px;
    right: 16px;
    color: #eee;
    display: flex;
    align-items: center;
    margin: 0.5rem;
`