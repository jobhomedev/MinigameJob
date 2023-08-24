import React from 'react';
import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    justify-content: center;

    h1 {
        margin: 0;
        margin-bottom: 0.25rem;
        color: #fff;
        font-weight: lighter;
        font-family: 'HKGrotesk-Ligth';
    }

    p, div, button{
        font-family: 'HKGrotesk-Regular';
    }
/* Adicionando as fontes de arquivos. */
    @font-face {
        font-family: 'HKGrotesk-Regular';
        src: url('../../assets/fonts/WEB/HKGrotesk-Regular.woff') format('woff');
        src: url('../../assets/fonts/WEB/HKGrotesk-Regular.woff2') format('woff2');
        
        font-family: 'HKGrotesk-Ligth';
        src: url('../../assets/fonts/WEB/HKGrotesk-Light.woff') format('woff');
        src: url('../../assets/fonts/WEB/HKGrotesk-Light.woff2') format('woff2');
    }
`;