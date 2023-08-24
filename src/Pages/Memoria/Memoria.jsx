import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { LogoGame } from '../Menu/style';
import { GoMenu } from '../Temas/style';
import { PageContainer } from '../../Components/Global/PageContainer'
import { Link } from "react-router-dom";
import {
  GameOver,
  GameOverContainer,
  GameOverOption,
  LifesAndTimerContainer,
  GameOverOptionContainer,
  LifesAndTimer,
  Reload
} from './style';
import Pontos from '../../assets/Pontos.svg';
import ReloadIcon from '../../assets/Reload.svg';
import Coracao from '../../assets/Coracao.svg';
import Relogio from '../../assets/Relogio.svg';
import backgroundGiz from '../../assets/backgroundGiz.jpg';
import PecaGame from '../../assets/PecaGame.svg';
import JobhomeLogo from '../../assets/CardVirado.svg';
import Menor from "../../assets/Menor.svg";
import Joker from '../../assets/Coringa.svg';
import JobSemTexto from '../../assets/JobSemTexto.svg';
import LogoEscura from '../../assets/logoEscura.svg';
import JobTextoLogo from '../../assets/JobTextoLogo.svg';

//Animação de virar a carta
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
    animation: ${({ flipped }) => (flipped ? 'none' : flipAnimation)} 1s cubic-bezier(0.25, 0.1, 0.25, 1);    animation-fill-mode: forwards;
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

//Declarando as cartas e suas imagens.
const iconList = [
  { id: 1, flipped: false, img: LogoEscura, flipAnimation: '', shine: false },
  { id: 2, flipped: false, img: JobhomeLogo, flipAnimation: '', shine: false },
  { id: 3, flipped: false, img: JobSemTexto, flipAnimation: '', shine: false },
  { id: 4, flipped: false, img: JobTextoLogo, flipAnimation: '', shine: false },
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
  const [lifes, setLifes] = useState(5);
  const [flippedCards, setFlippedCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000); // 1000 milissegundos = 1 segundo

      // Limpa o timer quando o componente é desmontado
      return () => clearTimeout(timer);
    } else if (time === 0) {
      setLifes(0)
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
        setScore(score + 1);
        setFirstCard(null);
        setSecondCard(null);
        //  alert("Estão iguais");

      } else {

        // alert("Não são iguais");
        // Desvirar as cartas após um tempo
        setLifes(lifes - 1);
        setTimeout(() => {
          firstCard.flipped = false;
          clickedCard.flipped = false;
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
    setLifes(5);
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
        <PageContainer backgroundImage={backgroundGiz}>
          <GameOverContainer>
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
        </PageContainer>
      ) : score === 1 ? (
        // Se o jogador fez 4 pontos, exiba uma mensagem de parabéns
        <PageContainer backgroundImage={backgroundGiz}>
          <GameOverContainer>
            <GameOver>Parabéns!</GameOver>
            <GameOver>Você formou todos os pares!</GameOver>
            <GameOverOption onClick={resetCards}>Jogar Novamente</GameOverOption>
            <GameOverOption to={"/"}>
              Não
            </GameOverOption>
          </GameOverContainer>
        </PageContainer>
      ) : (
        <PageContainer backgroundImage={backgroundGiz}>
          <h1>Jogo da Memória</h1>

          <LifesAndTimerContainer>
            <LifesAndTimer>
              <LogoGame src={Pontos} /> {score}
            </LifesAndTimer>
            <LifesAndTimer>
              <LogoGame src={Relogio} /> {time}
            </LifesAndTimer>
            <LifesAndTimer>
              <LogoGame src={Coracao} /> {lifes}/5
            </LifesAndTimer>
          </LifesAndTimerContainer>
          <GameContainer>

            {cards.map((card, i) => (
              <div key={i}>
                <Card
                  $flipped={card.flipped}
                  onClick={() => handleCardClick(card)}
                >
                  {card.flipped ? (
                    <CardBack style={{ backgroundImage: `url(${card.img})` }} />
                  ) : (
                    <CardFront />
                  )}
                </Card>
              </div>
            ))}
            <Link to={"/"}>
              <GoMenu>
                <LogoGame src={Menor} />
                Menu
              </GoMenu>
            </Link>
            <Reload onClick={resetCards}>
              <LogoGame src={ReloadIcon} />
              Restart
            </Reload>
          </GameContainer>
        </PageContainer>
      )}
    </PageContainer>
  );
};
export default GameMemory;