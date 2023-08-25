import { PageContainer } from "../../Components/Global/PageContainer";
import { ButtonRule, ButtonRuleContainer, Coringa, MemoryRulesContainer, Content } from './style.js'
import { LogoGame, LogoJobhome, LogoJobhomeContainer } from "../Menu/style.js";
import Play from '../../assets/Play.svg';
import JobTitle from '../../assets/JobTitle.svg';

export default function MemoryRules() {
    return (
        <PageContainer>
            <LogoJobhomeContainer>
                <LogoJobhome src={JobTitle} />
            </LogoJobhomeContainer>
            <MemoryRulesContainer>
                <Content>Este é o jogo da memória, encontre o par de cada carta.</Content>
                <Content>Porém tome cuidado com esta carta.</Content>
                <Coringa></Coringa>
                <Content>Caso a encontre, irá perder o Game.</Content>
                <br></br>
                <Content>Vamos começar?</Content>
                
                <ButtonRuleContainer>
                    <ButtonRule to={"../gamememory"}>
                        <LogoGame src={Play} />PLAY
                    </ButtonRule>
                    <ButtonRule to={"/"}>
                        NÃO
                    </ButtonRule>
                </ButtonRuleContainer>
            
            </MemoryRulesContainer>
        </PageContainer>
    )
}