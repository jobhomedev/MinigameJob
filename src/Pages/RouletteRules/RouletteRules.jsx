import { PageContainer } from "../../Components/Global/PageContainer";
import { ButtonRule, ButtonRuleContainer, RouletteRulesContainer, Content } from './style.js'
import { LogoGame, LogoJobhome, LogoJobhomeContainer } from "../Menu/style";
import Play from '../../assets/Play.svg';
import JobTitle from '../../assets/JobTitle.svg';

export default function RouletteRules() {
    return (
        <PageContainer>
            <LogoJobhomeContainer>
                <LogoJobhome src={JobTitle} />
            </LogoJobhomeContainer>
            <RouletteRulesContainer>
                <Content>
                    Esta é a Roleta da JobHome, gire e ganhe um prêmio incrível.
                </Content>
                <ButtonRuleContainer>
                    <ButtonRule to={"../roulette"}>
                        <LogoGame src={Play} />PLAY
                    </ButtonRule>
                    <ButtonRule to={"/"}>
                        NÃO
                    </ButtonRule>
                </ButtonRuleContainer>
            </RouletteRulesContainer>
        </PageContainer>
    )
}