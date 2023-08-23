import { PageContainer } from "../../Components/Global/PageContainer";
import { GameContainerAdivinha, CardEscolhido, CardEscolhidoContainer, CardAdivinha, CardFrontAd, CardBackAd } from "./style";
import { useState } from "react";
import BackgroundGiz from '../../assets/backgroundGiz.jpg';
import LogoEscura from '../../assets/logoEscura.svg';
import JobSemTexto from '../../assets/JobSemTexto.svg';
import JobTextoLogo from '../../assets/JobTextoLogo.svg';
import JobhomeLogo from '../../assets/CardVirado.svg';
import Joker from '../../assets/Coringa.svg';
import FoneAberto from '../../assets/FoneAberto.svg';

// Cartas declaradas
const iconList = [
  { id: 1, flipped: false, img: LogoEscura, flipAnimation: '' },
  { id: 2, flipped: false, img: JobhomeLogo, flipAnimation: '' },
  { id: 3, flipped: false, img: JobSemTexto, flipAnimation: '' },
  { id: 4, flipped: false, img: JobTextoLogo, flipAnimation: '' },
  { id: 5, flipped: false, img: Joker, flipAnimation: '' },
  { id: 6, flipped: false, img: FoneAberto, flipAnimation: '' },
];

// Embaralha as cartas
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const sortCards = () => {
  return shuffleArray([...iconList]);
};


function insertAtRandomPosition(array, item) {
  const randomIndex = Math.floor(Math.random() * (array.length + 1));
  array.splice(randomIndex, 0, item);
}

const handleCardClick = (clickedCard) => {
  // Ignorar cliques em cartas já viradas

  if (clickedCard.flipped) return;
}

export default function Divination() {

  const [cards, setCards] = useState(sortCards);
  const randomCardIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomCardIndex];

  return (
    <PageContainer backgroundImage={BackgroundGiz}>
      <h1>Encontre a carta</h1>
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
                  <CardFrontAd />
                ) : (
                  <CardBackAd $backgroundImage={card.img} />
                )}
              </CardAdivinha>
            </div>
          )
        })}
      </GameContainerAdivinha>
    </PageContainer>
  )
}