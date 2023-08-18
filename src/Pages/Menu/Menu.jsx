import { ButtonsMenu, ButtonGame, LogoGame, GoThemes, TitleJob } from './style.js';
import { PageContainer } from '../../Components/Global/PageContainer.js'
import { Link } from 'react-router-dom';
import Interrogacao from '../../assets/Interrogacao.svg';
import InterrogacaoIcon from '../../assets/InterrogacaoIcon.svg';
import PecaMenu from '../../assets/PecaGameMenu.svg';
import RoletaMenu from '../../assets/RoletaMenu.svg';
import JobTitle from '../../assets/JobTitle.svg';
import iconeTema from '../../assets/iconeTema.svg'
import backgroundGiz from '../../assets/backgroundGiz.jpg'

export default function Menu() {
    return (
        <PageContainer backgroundImage={backgroundGiz}>
            <LogoGame src={JobTitle} />
            <ButtonsMenu>
                <Link to={"gamememory"}>
                    <ButtonGame>
                        <LogoGame src={PecaMenu} />Jogo mémoria
                    </ButtonGame>
                </Link>
                <Link to={"roulette"}>
                    <ButtonGame>
                        <LogoGame src={RoletaMenu} />Roleta
                    </ButtonGame>
                </Link>
                <Link to={"divination"}>
                    <ButtonGame>
                        <LogoGame src={Interrogacao} />Encontre a Carta
                    </ButtonGame>
                </Link>
            </ButtonsMenu>
            <Link to={"themes"}>
                <GoThemes><LogoGame src={iconeTema} />Temas</GoThemes>
            </Link>
        </PageContainer>
    );
}