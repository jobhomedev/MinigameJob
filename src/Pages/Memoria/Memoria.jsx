import { PageContainer } from "../../Components/Global/PageContainer";
import { GameContainer, Peca, LogoPeca, LifesAndTimer, LogoLifes } from "./style";
import backgroundGiz from '../../assets/backgroundGiz.jpg';
import PecaGame from '../../assets/PecaGame.svg';
import Coracao from '../../assets/Coracao.svg';

export default function GameMemory() {
    return (
        <PageContainer backgroundImage={backgroundGiz}>
            
            <h1>Jogo da Memória</h1>

            <LifesAndTimer><LogoLifes></LogoLifes><LogoLifes src={Coracao} />5/5</LifesAndTimer>

            <GameContainer>
                <div>
                    <LogoPeca src={PecaGame} />
                    <LogoPeca src={PecaGame} />
                    <LogoPeca src={PecaGame} />
                </div>
                <div>
                    <LogoPeca src={PecaGame} />
                    <LogoPeca src={PecaGame} />
                    <LogoPeca src={PecaGame} />
                </div>
                <div>
                    <LogoPeca src={PecaGame} />
                    <LogoPeca src={PecaGame} />
                    <LogoPeca src={PecaGame} />
                </div>

            </GameContainer>
        </PageContainer>
    )
}