import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    height: 100vh; /* Usando viewport height para ocupar toda a altura da tela */
    display: flex;
    flex-direction: column;
    align-items: center; /* Centralizar horizontalmente */
    text-align: center;
    margin: 0;
    box-sizing: border-box; /* Garantir que o padding não afete as dimensões totais */
    justify-content: center;

    h1 {
        margin: 0;
        margin-bottom: 0.5rem; /* Aumentando o espaçamento inferior */
        color: #fff;
        font-weight: lighter;
        font-family: "Hanken Grotesk";
        font-size: 1.5rem; /* Ajustando o tamanho da fonte */
    }

    p, div, button {
        font-family: 'Hanken Grotesk';
    }
`;

export const Footer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    justify-content: space-between;
    position: relative;
`;
