import { PageContainer } from "../../Components/Global/PageContainer";
import { Reload } from "../Memoria/style";
import { LogoGame } from "../Menu/style";
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
import Confetti from 'react-confetti';

// Cartas declaradas
const iconList = [
  { id: 1, flipped: false, img: LogoEscura },
  { id: 2, flipped: false, img: JobhomeLogo },
  { id: 3, flipped: false, img: JobSemTexto },
  { id: 4, flipped: false, img: JobTextoLogo },
  { id: 5, flipped: false, img: Joker },
  { id: 6, flipped: false, img: FoneAberto },
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
  const randomCardIndex = Math.floor(Math.random() * cards.length);
  const [isBlinking, setIsBlinking] = useState(false);

  const handleCardClick = (clickedCard) => {
    // Ignorar cliques em cartas já viradas
    //if (!clickedCard.flipped) return;

    const newRandomCard = chooseRandomCard(cards);

    const updatedCards = cards.map((card) => {
      if (card.id === clickedCard.id) {
        return { ...card, flipped: false };
      }
      return { ...card, flipped: true };
    });

    setCards(updatedCards);

    setTimeout(() => {
      if (clickedCard.id === randomCard.id) {
        //Valida se a carta selecionada é igual a carta que deve ser adivinhada.
        //alert("Estão iguais")
        setScore(score + 1);
        setIsBlinking(true)
        setTimeout(() => {
          setCards([...cards]);
          shuffleAndResetCards();//Embaralha as cartas após meio segundo.
          setRandomCard(newRandomCard);

        }, 500)
      }
      else {
        alert("Não são iguais");
        setFouls(fouls + 1);
        setTimeout(() => {
          setCards([...cards]);
        }, 500)
      }
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
      {score === 2 ? (
        <GameOverContainer>
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
          {showConfetti && <Confetti />}
        </GameOverContainer>
      ) : fouls === 5 ? (
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
                <div key={card.id}>
                  <CardAdivinha
                    $flipped={card.flipped}
                    onClick={() => handleCardClick(card)}
                  >
                    {card.flipped ? (
                      <CardFrontAd $backgroundImage={PecaGame} />
                    ) : (
                      <CardBackAd $backgroundImage={card.img} />
                    )}
                  </CardAdivinha>
                </div>
              )
            })}

          </GameContainerAdivinha>

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
        </PageContainer>
      )}
    </PageContainer>
  )
}