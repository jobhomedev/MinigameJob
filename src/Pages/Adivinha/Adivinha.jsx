import { PageContainer } from "../../Components/Global/PageContainer";
import { GameContainerAdivinha, CardEscolhido, CardAdivinha, CardFrontAd, CardBackAd } from "./style";
import { useState } from "react";
import BackgroundGiz from '../../assets/backgroundGiz.jpg';
import LogoEscura from '../../assets/logoEscura.svg';
import JobSemTexto from '../../assets/JobSemTexto.svg';
import JobTextoLogo from '../../assets/JobTextoLogo.svg';
import JobhomeLogo from '../../assets/CardVirado.svg';
import Joker from '../../assets/Coringa.svg';

const iconList = [
    { id: 1, flipped: false, img: LogoEscura, flipAnimation: '', shine: false},
    { id: 2, flipped: false, img: JobhomeLogo, flipAnimation: '', shine: false},
    { id: 3, flipped: false, img: JobSemTexto, flipAnimation: '', shine: false},
    { id: 4, flipped: false, img: JobTextoLogo, flipAnimation: '', shine: false},
  ];

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


export default function Divination(){

    const [cards, setCards] = useState(sortCards);
    
    return(
        <PageContainer backgroundImage={BackgroundGiz}>
            <h1>Encontre a carta</h1>
            <CardEscolhido/>
            <GameContainerAdivinha>
            {cards.map((card, i) => (
            <div key={i}>
              <CardAdivinha $flipped={card.flipped}>
                {card.flipped ? <CardBackAd style={{ backgroundImage: `url(${card.img})` }} /> : <CardFrontAd />}
              </CardAdivinha>
            </div>
          ))}
            </GameContainerAdivinha>
        </PageContainer>
    )
}