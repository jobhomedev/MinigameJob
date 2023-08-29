import styled, { keyframes, css } from 'styled-components';
import PecaGame from '../../assets/CardVirado.svg';

const flipAnimation = keyframes`
    0% {
        transform: perspective(600px) rotateY(0deg);
    }
    100% {
        transform: perspective(600px) rotateY(180deg);
    }
`;

export const GameContainerAdivinha = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 20vmin);
    grid-template-rows: repeat(1, auto);
    gap: 1rem;
    padding: 1rem;
    justify-items: center;
    justify-content: center;
    width: min(30rem, 100%);
`

export const CardEscolhidoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 24vmin);
    grid-template-rows: repeat(1, 10rem);
    justify-content: center;
    justify-items: center;
    width: 10rem;

`

export const CardEscolhido = styled.img`
    width: 100%;
    height: auto;
    border: 1px solid #FFED4B; /* Adicionando uma borda amarela */
    padding: 10px; /* Adicionando um preenchimento de 10px em todas as direções */
    background-color: yellow; //Definindo a cor do preenchimento
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
`;

export const CardAdivinha = styled.div`
    width: 20vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: ${({ flipped }) => (flipped ? 'none' : flipAnimation)} 1s cubic-bezier(0.25, 0.1, 0.25, 1);animation-fill-mode: forwards;
    /* perspective: 1000px; */
    /* position: relative; */
    transform-style: preserve-3d;
    aspect-ratio: 1/1;

`;

export const CardFrontAd = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
    background-size: cover;
    transform: rotateY(180deg);
`;

export const CardBackAd = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
    background-size: cover;
    transform: rotateY(180deg);
`;

export const ErrosAcertosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    color: #fff;
`

export const Acertos = styled.img`
    display: inline-block; 
    margin-bottom: 0.5rem;
    color: #03a487;
`