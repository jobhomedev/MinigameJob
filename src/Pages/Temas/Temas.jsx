import {
    ThemeButton,
    ThemeButtonContainer,
    TitleTheme,
    GoMenu,
    ThemeList,
    ThemeButtonItem,
    ThemeButtonDescription
} from "./style";
import { LogoGame } from "../Menu/style";
import { PageContainer, Footer } from "../../Components/Global/PageContainer";
import { useContext } from "react";
import Menor from "../../assets/Menor.svg";
import themes from "../../themes";
import themeContext from "../../context/themeContext";

export default function Themes() {
    const { currentTheme, setCurrentTheme } = useContext(themeContext);

    return (
        <PageContainer>
            <ThemeButtonContainer>
                <TitleTheme>Configuração de Tela de Fundo</TitleTheme>
                <ThemeList>
                    {themes.map((theme) => (
                        <ThemeButtonItem $currentTheme={theme === currentTheme} onClick={() => setCurrentTheme(theme)}>
                            <ThemeButton $image={theme.image} />
                            <ThemeButtonDescription>
                                {theme.description}
                            </ThemeButtonDescription>

                        </ThemeButtonItem>
                    ))}
                </ThemeList>
            </ThemeButtonContainer>
            <Footer>
                <GoMenu to={"/"}><LogoGame src={Menor} />Menu</GoMenu>
            </Footer>
        </PageContainer>
    )
}