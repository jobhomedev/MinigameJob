import { Link } from "react-router-dom";
import styled from 'styled-components';

export const RouletteRulesContainer = styled.div`
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