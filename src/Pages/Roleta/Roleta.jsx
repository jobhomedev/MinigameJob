import React, { useState, useEffect } from 'react';
import { RouletteContainer } from './style.js';
import { PageContainer } from '../../Components/Global/PageContainer.js';
import BackgroundGiz from '../../assets/backgroundGiz.jpg';

export default function Roulette() {

const positions = [
    {
        award: "Nada",
        angle: 0,
    },
    {
        award: "Nada",
        angle: 45,
    },
    {
        award: "Nada",
        angle: 90,
    },
    {
        award: "Batedeira",
        angle: 180,
    }
]

  const [isSpinning, setIsSpinning] = useState(true)

  useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        setIsSpinning(false);
      }, 5000);
    }
  }, [isSpinning]);

  const handleSpinClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    },3000)
  }

  return (
    <PageContainer>
      <RouletteContainer isSpinning={isSpinning} $angle={90}></RouletteContainer>
      <button onClick={handleSpinClick} disabled={isSpinning}>Girar</button>
    </PageContainer>
  )
}