import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { LogoGame } from '../Menu/style';
import { GoMenu } from '../Temas/style';
import { PageContainer } from '../../Components/Global/PageContainer'
import { Link } from "react-router-dom";
import { Reload } from './style';
import ReloadIcon from '../../assets/Reload.svg'
import backgroundGiz from '../../assets/backgroundGiz.jpg';
import PecaGame from '../../assets/PecaGame.svg';
import JobhomeLogo from '../../assets/CardVirado.svg';
import Menor from "../../assets/Menor.svg";
import Joker from '../../assets/Coringa.svg';
import JobSemTexto from '../../assets/JobSemTexto.svg';
import LogoEscura from '../../assets/logoEscura.svg';
import JobTextoLogo from '../../assets/JobTextoLogo.svg';

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
    animation: ${({ $flipped }) => ($flipped ? flipAnimation : 'none')};
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

const iconList = [
  { id: 1, flipped: false, img: LogoEscura },
  { id: 2, flipped: false, img: JobhomeLogo },
  { id: 3, flipped: false, img: JobSemTexto },
  { id: 4, flipped: false, img: JobTextoLogo },
];

const pares = [{}];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const sortCards = () => {
  const cards = iconList
    .map(icon => [{ ...icon }, { ...icon }])
    .flat();

  insertAtRandomPosition(cards, { id: 5, flipped: false, img: Joker },)

  return shuffleArray(cards);

}
function insertAtRandomPosition(array, item) {
  const randomIndex = Math.floor(Math.random() * (array.length + 1));
  array.splice(randomIndex, 0, item);
}
const GameMemory = () => {

  const [cards, setCards] = useState(sortCards);

  const [flippedCards, setFlippedCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const handleCardClick = (card) => {
    if (card.flipped) 
    return;
    if (firstCard) {
      if (firstCard.id === card.id) {
        alert("Estão iguais");
        setFirstCard(null);
        card.flipped = true;
        firstCard.flipped = true;
      } else {
        alert("Não são iguais");
        firstCard.flipped = false;
      }
      setFirstCard(null);
    }
    card.flipped = true;
    setFirstCard(card);

    /* if (flippedCards.length < 2) {
      setCards(prevCards => {
        const updatedCards = prevCards.map(card => {
          if (card === card1 && !card.flipped) {
            setFlippedCards(prevFlippedCards => [...prevFlippedCards, card]);
            return { ...card, flipped: true };
          }
          return card;
        });

        if (flippedCards.length === 1) {
          const [card1] = flippedCards;
          const card2 = updatedCards.find(card => card.flipped && card.id !== card1.id);

          if (card2.id === 2 && card1.id === 5) {
            console.log('par')
            updatedCards.forEach(card => {
              if (card.id === card1.id || card.id === card2.id) {
                card.matched = true;
              }
            });
          }
        }

        return updatedCards;
      });
    } */

    /* if (flippedCards.length === 2) {
      setTimeout(() => {
        setCards(prevCards => prevCards.map(card => ({ ...card, flipped: false })));
        setFlippedCards([]);
      }, 1000); // Tempo em milissegundos
    } */
  };


  function resetCards() {
    setFlippedCards([]);
    setCards(prevCards =>
      prevCards.map(card => ({ ...card, flipped: false }))
    );
  }

  return (
    <PageContainer backgroundImage={backgroundGiz}>
      <h1>Jogo da Memória</h1>
      <GameContainer>
        {cards.map((card, i) => (
          <div key={i}>
            <Card $flipped={card.flipped} onClick={() => handleCardClick(card)}>
              {card.flipped ? <CardBack style={{ backgroundImage: `url(${card.img})` }} /> : <CardFront />}
            </Card>
          </div>
        ))}
      </GameContainer>
      <Link to={"/"}>
        <GoMenu><LogoGame src={Menor} />Menu</GoMenu>
      </Link>
      <Reload onClick={resetCards}>Restart</Reload>
    </PageContainer>
  );
};

export default GameMemory;