import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Roleta from '../../assets/RoletaGame2.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const RouletteContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  background: url(${Roleta}) no-repeat center center;
  background-size: cover;
  transition: transform 5s ease-out;
  transform: rotate(${({ $angle }) => rotateNTimes($angle)}deg);
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


function rotateNTimes(angle) {
  const n = Math.round(Math.random() * 20);
  const totalRotation = angle * n;
  const normalizedRotation = totalRotation % 360;

  return normalizedRotation;
}
