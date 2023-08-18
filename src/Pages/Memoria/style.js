import styled, { keyframes } from 'styled-components';

const flipAnimation = keyframes`
    0% {
        transform: perspective(600px) rotateY(0deg);
    }
    100% {
        transform: perspective(600px) rotateY(180deg);
    }
`;

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
`

export const LogoLifes = styled.img`
    padding: 0 0 0 0;
`