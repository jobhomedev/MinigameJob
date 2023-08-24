import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoJobhomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    height: fit-content;
    padding: 1rem;
`;

export const LogoJobhome = styled.img`
    width: min(100%, 20rem);
`;

export const PhraseJobhome = styled.div`
    height: 100%;
    color: #fff;
    width: auto;
    font-family: 'HKGrotesk-Regular', sans-serif;
`;

export const ButtonsMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 1rem;
    padding: 1rem;
    width: min(100%, 27rem);
    margin: 0 auto;
    `;

export const ButtonGame = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 6rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: large;
    background-color: #fff;
    text-decoration: none;
    &:hover {
        background-color: #f3f3f3;
    }
`;

export const LogoGame = styled.img`
   height: 100%;
   border-radius: 0.25rem 0rem 0rem 0.25rem;
   margin-right: 0.5rem;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 1rem;
    color: #4f4f4f;
    font-family: 'HKGrotesk-Regular', sans-serif;

`;

export const GoThemes = styled.a`
    position: absolute;
    bottom: 16px;
    right: 16px;
    color: #eee;
    display: flex;
    align-items: center;
    margin: 0.5rem;
`;