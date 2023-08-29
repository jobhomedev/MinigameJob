import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as ArrowRoletaIcon } from '../../assets/arrowRoleta.svg';
import Roleta from '../../assets/RoletaGame3.png';
import ButtonRoleta from '../../assets/JobTextoLogo.svg';

export const Congratulations = styled.h2`
  color: #eee;
  font-size: 50px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: min(95vw, 30rem);
  height: min(95vw, 30rem);
  margin: 0 auto;
  overflow: hidden;
  color: #eee;
  font-size: x-large;
`;

export const RouletteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: url(${Roleta}) no-repeat center center;
  background-size: cover;
  transition: transform ${({ $duration }) => $duration}s ease-out;
  transform: rotate(${({ $angle }) => $angle}deg);
`;

export const Button = styled.button`
  position: absolute;
  width: 20%;
  height: 20%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: ${({ $spinning }) => $spinning ? '#fff' : '#636363'};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1),
              0px 8px 16px rgba(0, 0, 0, 0.1),
              0px 16px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  cursor: ${({ $spinning }) => $spinning ? 'normal' : 'pointer'};
  background-image: url(${ButtonRoleta});
  background-size: cover;
  background-position: center;
`;

export const ArrowRoleta = styled(ArrowRoletaIcon)`
  position: absolute;
  top: 0;
  right: 50%;
  width: 10rem;
  transform: translate(53.5%, -60%);
  z-index: 10;
`;

export const Footer = styled.div``;

export const GoMenu = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: #eee;
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

export const LogoGame = styled.img`
  height: 100%;
  border-radius: 0.25rem 0rem 0rem 0.25rem;
`;
export const Reload = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: #eee;
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;