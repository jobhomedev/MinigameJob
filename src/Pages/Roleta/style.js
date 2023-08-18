import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Roleta from '../../assets/RoletaGame2.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RouletteContainer = styled.div`
  width: 200px;
  height: 200px;
  background: url(${Roleta}) no-repeat center center;
  background-size: cover;
  animation: ${props => (props.isSpinning ? `${rotate} 5s linear infinite` : 'none')};
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Roulette = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpinClick = () => {
    setIsSpinning(true);
  };

  return (
    <RouletteContainer isSpinning={isSpinning}>
      <Button onClick={handleSpinClick}>Girar</Button>
    </RouletteContainer>
  );
};

export default Roulette;
