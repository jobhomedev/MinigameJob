import { ButtonsMenu, ButtonGame, LogoGame, Temas, TitleJob, PageContainer } from './style.js';
import { Link } from 'react-router-dom';
import Peca from '../../assets/Peca.svg';
import Roleta from '../../assets/Roleta.svg';
import JobTitle from '../../assets/JobTitle.svg';
import iconeTema from '../../assets/iconeTema.svg'

export default function Menu() {
    return (
        <PageContainer>
            <LogoGame src={JobTitle} />
            <ButtonsMenu>
                <Link to={"gamememory"}>
                    <ButtonGame>
                        <LogoGame src={Peca} />Jogo mémoria
                    </ButtonGame>
                </Link>
                <Link to={"roulette"}>
                    <ButtonGame>
                        <LogoGame src={Roleta} />Roleta
                    </ButtonGame>
                </Link>
                <Temas><LogoGame src={iconeTema} />Temas</Temas>

            </ButtonsMenu>
        </PageContainer>
    );
}