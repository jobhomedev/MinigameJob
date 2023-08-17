import { PageContainer } from "../../Components/Global/PageContainer"
import { RoulleteImage, RoulleteContainer } from "./style"
import backgroundGiz from "../../assets/backgroundGiz.jpg"
import RoletaGame from "../../assets/RoletaGame.svg"

export default function Roulette() {
    
    return (
        <PageContainer backgroundImage={backgroundGiz}>
            <RoulleteContainer>
                <RoulleteImage src={RoletaGame}></RoulleteImage>
            </RoulleteContainer>
        </PageContainer>
    )
}