import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleTheme = styled.h1`
    margin: 0 0 0 0;
    text-align: center;
    margin-bottom: 0.5rem;
`;

export const ThemeButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    width: 80%;
    padding: 1rem;
`;

export const GoMenu = styled(Link)`
    bottom: 16px;
    left: 16px;
    color: #eee;
    display: flex;
    align-items: center;
    margin: 0.5rem;
    font-family: 'HKGrotesk-Regular', sans-serif;
    text-decoration: none;
    font-size: 2.5rem;
`;
export const ThemeList = styled.div`
    overflow-y: auto;
    width: 100%;
    height: 100%;
`;

export const ThemeButtonItem = styled.div`
    border: 0.05rem solid ${({$currentTheme}) => $currentTheme ? '#03A487' : 'transparent'};
    border-radius: 0.25rem;
    margin: 1rem;
    width: calc(100% - 2rem);
    & * {
        cursor: pointer;
    }
`;

export const ThemeButton = styled.button`
    height: 15vw;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: none;
    font-size: large;
    background-image: url("${({ $image }) => $image}");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.25rem 0.25rem 0rem 0rem;
`;

export const ThemeButtonDescription = styled.div`
    background-color: #fff;
    color: #616161;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    padding: 0.5rem;
`;