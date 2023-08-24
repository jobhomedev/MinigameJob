import React, { useState, useEffect } from 'react';
import {
  ArrowRoleta,
  Button,
  Container,
  RouletteContainer,
  Footer,
  GoMenu,
  LogoGame,
  Reload,
} from './style.js';
import { PageContainer } from '../../Components/Global/PageContainer.js';
import Title from '../../Components/Title.jsx';
import { Link } from 'react-router-dom';
import Menor from "../../assets/Menor.svg";

const createPosition = (award, angle) => ({ award, angle });

// 0, 10, 30, 50, 65, 80, 90, 100

const positions = [
  createPosition(0, 45 * 0),
  createPosition(10, 45 * 1),
  createPosition(30, 45 * 2),
  createPosition(50, 45 * 3),
  createPosition(65, 45 * 4),
  createPosition(80, 45 * 5),
  createPosition(90, 45 * 6),
  createPosition(100, 45 * 7),
];

console.log(positions);

export default function Roulette() {
  const [spinning, setSpinning] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(positions[0]);
  const [repetitions, setRepetitions] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleSpinClick() {
    if (spinning) return;
    setRepetitions(0);
    setDuration(0);
    setSpinning(true);

    const timeout = setTimeout(() => {
      const currentPosition = getRandomItem(positions);
      const repetitions = Math.round(Math.random() * 10) + 10;
      const duration = getDuration(repetitions);
      setCurrentPosition(currentPosition);
      setRepetitions(repetitions);
      setDuration(duration);
      setTimeout(() => setSpinning(false), duration * 1000);
    }, 1);
    return () => clearTimeout(timeout);
  }

  return (
    <PageContainer>

      <Title>Roleta da Sorte</Title>

      <Container>

        <ArrowRoleta />

        <RouletteContainer
          $angle={rotateNTimes(currentPosition.angle, repetitions)}
          $duration={duration}
          $repetitions={repetitions} />

        <Button onClick={handleSpinClick}
          disabled={spinning}
          $spinning={spinning}>Girar</Button>

      </Container>

      <Footer>
        <Link to={"/"}>
          <GoMenu>
            <LogoGame src={Menor} />
            Menu
          </GoMenu>
        </Link>
      </Footer >
    </PageContainer >
  )
}

function rotateNTimes(angle, repetitions) {
  const totalRotation = 360 * repetitions;
  const normalizedRotation = totalRotation + angle;
  return normalizedRotation * -1;
}

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
}

function getDuration(repetitions) {
  return repetitions * 0.15;
}