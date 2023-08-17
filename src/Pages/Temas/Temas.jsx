import { ThemeButton, ThemeButtonContainer, TitleTheme, GoMenu } from "./style";
import { LogoGame } from "../Menu/style";
import { PageContainer } from "../../Components/Global/PageContainer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menor from "../../assets/Menor.svg";
import TemaApertoMao from "../../assets/TemaApertoMao.svg";
import backgroundGiz from "../../assets/backgroundGiz.jpg"

export default function Themes() {

    const [backgroundImage, setBackgroundImage] = useState(backgroundGiz);

    const handleBackgroundImage = () => {
        if(backgroundImage === backgroundGiz){
            setBackgroundImage(TemaApertoMao);
        } else {
            setBackgroundImage(backgroundGiz);
        }
    }
    
    return (
        <PageContainer backgroundImage={backgroundImage}>
            <TitleTheme>Configuração de Tela de Fundo</TitleTheme>
            <ThemeButtonContainer>
                <ThemeButton onClick={handleBackgroundImage}>Tema 1</ThemeButton>
                <ThemeButton>Tema 2</ThemeButton>
                <ThemeButton>Tema 3</ThemeButton>
                <ThemeButton>Tema 4</ThemeButton>
            </ThemeButtonContainer>
            <Link to={"/"}>
            <GoMenu><LogoGame src={Menor}/>Menu</GoMenu>
            </Link>
        </PageContainer>
    )
}