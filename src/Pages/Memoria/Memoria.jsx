import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { LogoGame, LogoJobhome, LogoJobhomeContainer } from "../Menu/style";
import { GoMenu } from '../Temas/style';
import { Footer, PageContainer } from '../../Components/Global/PageContainer'
import { Link } from "react-router-dom";
import {
  GameOver,
  GameOverContainer,
  GameOverOption,
  LifesAndTimerContainer,
  GameOverOptionContainer,
  LifesAndTimer,
  Reload,
  CardFront,
  CardBack,
  Card,
  GameContainer
} from './style';
import Pontos from '../../assets/Pontos.svg';
import ReloadIcon from '../../assets/Reload.svg';
import Coracao from '../../assets/Coracao.svg';
import Relogio from '../../assets/Relogio.svg';
import backgroundGiz from '../../assets/backgroundGiz.jpg';
import JobhomeLogo from '../../assets/CardVirado.svg';
import Menor from "../../assets/Menor.svg";
import Joker from '../../assets/Coringa.svg';
import JobSemTexto from '../../assets/JobSemTexto.svg';
import LogoEscura from '../../assets/logoEscura.svg';
import JobTextoLogo from '../../assets/JobTextoLogo.svg';
import JobTitle from '../../assets/JobTitle.svg';

//Declarando as cartas e suas imagens.
const iconList = [
  { id: 1, flipped: false, img: LogoEscura, flipAnimation: '' },
  { id: 2, flipped: false, img: JobhomeLogo, flipAnimation: '' },
  { id: 3, flipped: false, img: JobSemTexto, flipAnimation: '' },
  { id: 4, flipped: false, img: JobTextoLogo, flipAnimation: '' },
];

//Embaralha o vetor.
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

  const [time, setTime] = useState(30) //30 segundos de jogo, deve ser alterado na resetCards também.
  const [cards, setCards] = useState(sortCards);
  const [score, setScore] = useState(0);
  const [lifes, setLifes] = useState(3);
  const [flippedCards, setFlippedCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    if (time > 0 && score != 3) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000); // 1000 milissegundos = 1 segundo

      // Limpa o timer quando o componente é desmontado
      return () => clearTimeout(timer);
    } else if (time === 0) {
      setLifes(0);
    }
  }, [time]);

  const handleCardClick = (clickedCard) => {
    // Ignorar cliques em cartas já viradas
    if (clickedCard.flipped) return;

    if (!firstCard) {
      clickedCard.flipped = true;
      setFirstCard(clickedCard);
      if (clickedCard.id === 5) {
        setTimeout(() => setLifes(0), 1000);
      }
    } else if (!secondCard) {
      clickedCard.flipped = true;
      setSecondCard(clickedCard);
      if (clickedCard.id === 5) {
        setTimeout(() => setLifes(0), 2000);
      }

      if (firstCard.id === clickedCard.id) {
        setTimeout(() => {
          setScore(score + 1);
          setMatchedPairs([...matchedPairs, firstCard.id]);
          setFirstCard(null);
          setSecondCard(null);
        }, 500);

      } else {
        setTimeout(() => {
          setLifes(lifes - 1);

          // Desvirar as cartas após um tempo
          const updatedCards = cards.map((card) => {
            if (card === firstCard || card === clickedCard) {
              card.flipped = false;
            }
            return card;
          });

          setCards(updatedCards);
          setFirstCard(null);
          setSecondCard(null);
        }, 1000); // Tempo em milissegundos
      }
    }
  };

  function shuffleAndResetCards() {
    const shuffledCards = sortCards();
    setCards(shuffledCards);
  }

  function resetCards() {
    setFlippedCards([]);
    setMatchedPairs([]);
    setLifes(3);
    setTime(30);
    setScore(0);
    setFirstCard(null);
    setSecondCard(null);
    setCards(prevCards =>
      prevCards.map(card => ({ ...card, flipped: false }))
    );
    shuffleAndResetCards();
  }

  return (
    <PageContainer backgroundImage={backgroundGiz}>
      {/*Valida se lifes é igual a zero para determinar se irá ou não renderizar o game.*/}
      {lifes === 0 ? (
        <>
          <GameOverContainer>

            <LogoJobhomeContainer>
              <LogoJobhome src={JobTitle} />
            </LogoJobhomeContainer>

            <GameOver>Game Over </GameOver>
            <GameOver>Tentar Novamente?</GameOver>

            <GameOverOptionContainer>
              <GameOverOption onClick={resetCards}>
                Sim
              </GameOverOption>
              <GameOverOption to={"/"}>
                Não
              </GameOverOption>

            </GameOverOptionContainer>

          </GameOverContainer>

        </>
      ) : score === 3 ? (
        // Se o jogador fez 3 pontos, exiba uma mensagem de parabéns
        <>

          <LogoJobhomeContainer>
            <LogoJobhome src={JobTitle} />
          </LogoJobhomeContainer>

          <GameOverContainer>

            <GameOver>Parabéns!</GameOver>
            <GameOver>Você formou todos os pares!</GameOver>
            <GameOverOption onClick={resetCards}>Jogar Novamente</GameOverOption>
            <GameOverOption to={"/"}>
              Não
            </GameOverOption>

          </GameOverContainer>

        </>
      ) : (
        <>
          <h1>Jogo da Memória</h1>

          <LifesAndTimerContainer>

            <LifesAndTimer>
              <LogoGame src={Pontos} /> {score}
            </LifesAndTimer>
            <LifesAndTimer>
              <LogoGame src={Relogio} /> {time}
            </LifesAndTimer>
            <LifesAndTimer>
              <LogoGame src={Coracao} /> {lifes}/3
            </LifesAndTimer>

          </LifesAndTimerContainer>

          <GameContainer>

            {cards.map((card, i) => (
              /* <div> */
              <Card
                $flipped={card.flipped}
                onClick={() => handleCardClick(card)}
                $matched={matchedPairs.includes(card.id)}
                key={i}>
                {card.flipped ? (
                  <CardBack style={{ backgroundImage: `url(${card.img})` }} />
                ) : (
                  <CardFront />
                )}
              </Card>
              /* </div> */
            ))}

          </GameContainer>

          <Footer>
            <GoMenu to={"/"}>
              <LogoGame src={Menor} />
              Menu
            </GoMenu>

            <Reload onClick={resetCards}>
              <LogoGame src={ReloadIcon} />
              Restart
            </Reload>
          </Footer>
        </>
      )}
    </PageContainer>
  );
};
export default GameMemory;