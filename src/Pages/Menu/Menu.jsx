import { ButtonsMenu, ButtonGame, LogoGame, GoThemes, LogoJobhomeContainer, LogoJobhome, PhraseJobhome, Description } from './style.js';
import { PageContainer } from '../../Components/Global/PageContainer.js'
import { Link } from 'react-router-dom';
import PecaMenu from '../../assets/PecaGameMenu.svg';
import RoletaMenu from '../../assets/RoletaMenu.svg';
import InterrogationMenu from '../../assets/InterrogationMenu.svg';
import JobTitle from '../../assets/JobTitle.svg';
import iconeTema from '../../assets/iconeTema.svg'

export default function Menu() {
    return (
        <PageContainer>

            <LogoJobhomeContainer>
                <LogoJobhome src={JobTitle} />
                <PhraseJobhome>Seu call center home office</PhraseJobhome>
            </LogoJobhomeContainer>

            <ButtonsMenu>

                <ButtonGame to={"gamememoryrules"}>
                    <LogoGame src={PecaMenu} />
                    <Description>
                        Jogo memória
                    </Description>
                </ButtonGame>

                <ButtonGame to={"rouletterules"}>
                    <LogoGame src={RoletaMenu} />
                    <Description>
                        Roleta
                    </Description>
                </ButtonGame>

                <ButtonGame to={"divinationrules"}>
                    <LogoGame src={InterrogationMenu} />
                    <Description>
                        Encontre a Carta
                    </Description>
                </ButtonGame>

            </ButtonsMenu>

            <Link to={"themes"}>
                <GoThemes><LogoGame src={iconeTema} />Temas</GoThemes>
            </Link>

        </PageContainer>
    );
}