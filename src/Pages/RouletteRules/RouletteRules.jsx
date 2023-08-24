import { PageContainer } from "../../Components/Global/PageContainer";
import { ButtonRule, ButtonRuleContainer, Coringa, RouletteRulesContainer, Content } from './style.js'
import { LogoGame } from "../Menu/style.js";
import Play from '../../assets/Play.svg';

export default function RouletteRules() {
    return (
        <PageContainer>
            <RouletteRulesContainer>
                <Content>
                    Este é o game da roleta, gire e ganhe prêmios.
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