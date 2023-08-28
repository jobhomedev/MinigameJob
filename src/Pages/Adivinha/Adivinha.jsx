import { Footer, PageContainer } from "../../Components/Global/PageContainer";
import { Reload } from "../Memoria/style";
import { LogoGame, LogoJobhome, LogoJobhomeContainer } from "../Menu/style";
import {
  GameContainerAdivinha,
  CardEscolhido,
  CardEscolhidoContainer,
  CardAdivinha,
  CardFrontAd,
  CardBackAd,
  ErrosAcertosContainer,
  BlinkingCard
} from "./style";
import { GameOver, GameOverContainer, GameOverOption, GameOverOptionContainer } from "../Memoria/style";
import { useState } from "react";
import { GoMenu } from '../Temas/style';
import { Link } from "react-router-dom";
import Menor from "../../assets/Menor.svg";
import ReloadIcon from '../../assets/Reload.svg';
import BackgroundGiz from '../../assets/backgroundGiz.jpg';
import LogoEscura from '../../assets/logoEscura.svg';
import JobSemTexto from '../../assets/JobSemTexto.svg';
import JobTextoLogo from '../../assets/JobTextoLogo.svg';
import JobhomeLogo from '../../assets/CardVirado.svg';
import Joker from '../../assets/Coringa.svg';
import FoneAberto from '../../assets/FoneAberto.svg';
import PecaGame from '../../assets/PecaGame.svg';
import Pontos from '../../assets/Pontos.svg';
import Erros from '../../assets/Erros.svg';
import JobTitle from '../../assets/JobTitle.svg';

// Cartas declaradas
const iconList = [
  { id: 1, flipped: true, img: LogoEscura },
  { id: 2, flipped: true, img: JobhomeLogo },
  { id: 3, flipped: true, img: JobSemTexto },
  { id: 4, flipped: true, img: JobTextoLogo },
  { id: 5, flipped: true, img: Joker },
  { id: 6, flipped: true, img: FoneAberto },
];

// Embaralha as cartas
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function chooseRandomCard(cards) {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

const sortCards = () => {
  return shuffleArray([...iconList]);
};

export default function Divination() {
  const [cards, setCards] = useState(sortCards);
  const [randomCard, setRandomCard] = useState(chooseRandomCard(cards));
  const [score, setScore] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false); //estado para controlar a logica do jogo
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));//Delay para evitar que vire mais de uma carta por vez

  const handleCardClick = async (clickedCard) => {
    if (isProcessing || !clickedCard.flipped) return; // Se estiver processando ou a carta já estiver virada, não permitir clique

    setIsProcessing(true); // Iniciar processamento

    const newRandomCard = chooseRandomCard(cards);

    const updatedCards = cards.map((card) => {
      if (card.id === clickedCard.id) {
        return { ...card, flipped: false };
      }
      return { ...card, flipped: true };
    });

    setCards(updatedCards);

    setTimeout(async () => {
      if (clickedCard.id === randomCard.id) {
        setScore(score + 1);
        setIsBlinking(true);
        await delay(500); // aguardar 
        setCards(sortCards());
        setRandomCard(newRandomCard);
      } else {
        setFouls(fouls + 1);
        await delay(500); // aguardar 
        setCards(sortCards());
      }

      setIsProcessing(false); // Concluir processamento
    }, 1000);
  };

  function shuffleAndResetCards() {
    const shuffledCards = sortCards();
    setCards(shuffledCards);
  }

  function resetCards() {
    setScore(0);
    setFouls(0);
    // Escolha uma nova carta aleatoriamente
    const newRandomCard = chooseRandomCard(cards);
    setRandomCard(newRandomCard);

    shuffleAndResetCards();
  }

  return (
    <PageContainer backgroundImage={BackgroundGiz}>

      {score === 3 ? (

        <GameOverContainer>

          <LogoJobhomeContainer>
            <LogoJobhome src={JobTitle} />
          </LogoJobhomeContainer>

          <GameOver>Parabéns</GameOver>
          <GameOver>Deseja Continuar?</GameOver>

          <GameOverOptionContainer>

            <GameOverOption onClick={resetCards}>
              Sim
            </GameOverOption>
            <GameOverOption to={"/"}>
              Não
            </GameOverOption>

          </GameOverOptionContainer>

        </GameOverContainer>

      ) : fouls === 3 ? (
        <PageContainer>

          <LogoJobhomeContainer>
            <LogoJobhome src={JobTitle} />
          </LogoJobhomeContainer>

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
      ) : (

        <PageContainer>

          <h1>Encontre a carta</h1>

          <ErrosAcertosContainer>

            <LogoGame src={Pontos} /> {score}
            <LogoGame src={Erros} /> {fouls}

          </ErrosAcertosContainer>

          <CardEscolhidoContainer>

            <CardEscolhido src={randomCard.img} />

          </CardEscolhidoContainer>

          <GameContainerAdivinha>
            {cards.map((card) => {
              return (
                <CardAdivinha key={card.id}
                  $flipped={card.flipped}
                  onClick={() => handleCardClick(card)}>
                  {card.flipped ? (
                    <CardFrontAd $backgroundImage={PecaGame} />
                  ) : (
                    <CardBackAd $backgroundImage={card.img} />
                  )}
                </CardAdivinha>
              )
            })}

          </GameContainerAdivinha>

          <Footer >
            <GoMenu to={"/"}>
              <LogoGame src={Menor} />
              Menu
            </GoMenu>

            <Reload onClick={resetCards}>
              <LogoGame src={ReloadIcon} />
              Restart
            </Reload>
          </Footer>
        </PageContainer>
      )}
    </PageContainer>
  )
}