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
`

export const Coringa = styled.div`
    background-image: url(${Joker});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    margin: 1rem;
`

export const ButtonRuleContainer = styled.div`
    display: flex;
    flex-direction: row;
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