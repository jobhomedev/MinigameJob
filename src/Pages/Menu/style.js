import styled from 'styled-components';
import backgroundGiz from '../../assets/backgroundGiz.jpg'

export const ButtonsMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #1a1a1a69;
    height: 100vh; /* A altura será 100% da viewport */
    width: 100%; /* A largura será 100% */
    padding: 0 0 0 0;
`

export const ButtonGame = styled.button`
    height: 6rem;
    width: 27rem;
    margin: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    font-size: large;
`

export const Temas = styled.a`
    position: absolute;
    bottom: 16px;
    right: 16px;
    color: #eee;
    display: flex;
    align-items: center;
    margin: 0.5rem;
`

export const LogoGame = styled.img`
    display: flex;
    margin-right: 0.5rem;
`

export const TitleJob = styled.title`
    display: flex;
    justify-content: center;
`

export const PageContainer = styled.div`
    background-image: url(${backgroundGiz});
    background-size: cover;
    background-repeat: no-repeat
`