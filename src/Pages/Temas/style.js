import styled from 'styled-components';
import TemaApertoMao from "../../assets/TemaApertoMao.svg"
import TemaAgente from "../../assets/TemaAgente.svg"

export const TitleTheme = styled.h1`
    margin: 0 0 0 0;
    text-align: center;
    margin-bottom: 0.5rem;
`

export const ThemeButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #1a1a1a69;
    padding: 0 0 0 0;
`

export const ThemeButton = styled.button`
    height: 6rem;
    width: 27rem;
    margin: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    font-size: large;
    background-image: url(${TemaAgente});
    background-size: cover;
    background-repeat: no-repeat;
`

export const GoMenu = styled.a`
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: #eee;
    display: flex;
    align-items: center;
    margin: 0.5rem;
`
