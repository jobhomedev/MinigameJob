import { Link } from "react-router-dom";
import Joker from '../../assets/Coringa.svg';
import styled from 'styled-components';

export const MemoryRulesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    text-decoration: none;
`

export const Content = styled.p`
    color: #fff;
    font-family: 'Hanken Grotesk';
    font-size: min(7vw, 30px);
    padding-left: 5px;
    padding-right: 5px;
`

export const Coringa = styled.div`
    background-image: url(${Joker});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: min(10rem, 100%);
    height: 10rem;
`

export const ButtonRuleContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: min(7vw, 30px);
    justify-content: center;
`

export const ButtonRule = styled(Link)`
  color: #eee;
  display: flex;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  text-align: center;
`;