import React from 'react';
import styled from 'styled-components';

export const PageContainer = styled.div`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    text-align: center;
    margin: 0;
    justify-content: center;

    h1{
        margin: 0;
        margin-bottom: 0.25rem;
        color: #fff;
    }
`;