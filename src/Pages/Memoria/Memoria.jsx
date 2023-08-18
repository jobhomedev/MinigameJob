import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { LogoGame } from '../Menu/style';
import { GoMenu } from '../Temas/style';
import { PageContainer } from '../../Components/Global/PageContainer'
import { Link } from "react-router-dom"; 
import backgroundGiz from '../../assets/backgroundGiz.jpg';
import PecaGame from '../../assets/PecaGame.svg';
import CardVirado from '../../assets/CardVirado.svg';
import Menor from "../../assets/Menor.svg";

const flipAnimation = keyframes`
    0% {
        transform: perspective(600px) rotateY(0deg);
    }
    100% {
        transform: perspective(600px) rotateY(180deg);
    }
`;


const GameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 10rem);
    grid-template-rows: repeat(3, 10rem);
    gap: 10px;
    justify-items: center;
    justify-content: center;
`

const Card = styled.div`
    width: 150px;
    height: 150px;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    animation: ${({ flipped }) => (flipped ? flipAnimation : 'none')};
    animation-fill-mode: forwards;
    perspective: 1000px;
    position: relative;
    transform-style: preserve-3d;
`;

const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${PecaGame});
    background-size: cover;
    transform: rotateY(180deg);
`;

const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    transform: rotateY(180deg);
`;


const GameMemory = () => {
  const [cards, setCards] = useState([
    { id: 1, flipped: false, img: '../../assets/CardVirado.svg'},
    { id: 2, flipped: false },
    { id: 3, flipped: false },
    { id: 4, flipped: false },
    { id: 5, flipped: false },
    { id: 6, flipped: false },
    { id: 7, flipped: false },
    { id: 8, flipped: false },
    { id: 9, flipped: false },
    // Adicione mais cartas
  ]);

  const handleCardClick = (id) => {
    setCards(prevCards => {
      return prevCards.map(card => {
        if (card.id === id) {
          return { ...card, flipped: !card.flipped };
        }
        return card;
      });
    });
  };

  return (
    <PageContainer backgroundImage={backgroundGiz}>
      <h1>Jogo da Memória</h1>
      <GameContainer>
        {cards.map(card => (
          <div key={card.id}>
            <Card flipped={card.flipped} onClick={() => handleCardClick(card.id)}>
              {card.flipped ? <CardBack backgroundImage={CardVirado} /> : <CardFront />}
            </Card>
          </div>
        ))}
      </GameContainer>
      <Link to={"/"}>
        <GoMenu><LogoGame src={Menor} />Menu</GoMenu>
      </Link>
    </PageContainer>
  );
};

export default GameMemory;