import { PageContainer } from "../../Components/Global/PageContainer";
import { ButtonRule, ButtonRuleContainer, Content, DivinationRulesContainer } from './style.js'
import { LogoGame, LogoJobhome, LogoJobhomeContainer } from "../Menu/style.js";
import Play from '../../assets/Play.svg';
import JobTitle from '../../assets/JobTitle.svg';


export default function DivinationRules() {
    return (
        <PageContainer>
            <LogoJobhomeContainer>
                <LogoJobhome src={JobTitle} />
            </LogoJobhomeContainer>
            
            <DivinationRulesContainer>
                <Content>
                    Este é o jogo da adivinhação, encontre o par da carta mostrada no jogo.
                </Content>
                <Content>
                    Vamos começar?
                </Content>
                <ButtonRuleContainer>
                    <ButtonRule to={"../divination"}>
                        <LogoGame src={Play} />PLAY
                    </ButtonRule>
                    <ButtonRule to={"/"}>
                        NÃO
                    </ButtonRule>
                </ButtonRuleContainer>
            </DivinationRulesContainer>
        </PageContainer>
    )
}