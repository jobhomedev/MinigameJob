import { PageContainer } from "../../Components/Global/PageContainer";
import { ButtonRule, ButtonRuleContainer, Coringa, MemoryRulesContainer, Content } from './style.js'
import { LogoGame } from "../Menu/style.js";
import Play from '../../assets/Play.svg';

export default function MemoryRules() {
    return (
        <PageContainer>
            <MemoryRulesContainer>
                <Content>Este é o jogo da memória, encontre o par de cada carta, porém tome cuidado com o coringa, é a carta que você não quer achar.</Content>
                <Content>Jogo da Memória</Content>
                <Coringa></Coringa>
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