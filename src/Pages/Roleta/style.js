import styled from 'styled-components';

export const RoulleteImage = styled.img`
    display: flex;
    align-items: center;
`

export const RoulleteContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const RotatingImage = styled.img`
    width: 200px;
    height: 200px;
    transition: transform 0.5s ease;
    transform: rotate(${props => props.rotation}deg);
`