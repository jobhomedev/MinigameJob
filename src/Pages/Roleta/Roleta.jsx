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
import { Link } from 'react-router-dom';
import Title from '../../Components/Title.jsx';
import Menor from "../../assets/Menor.svg";

const createPosition = (award, angle) => ({ award, angle });

const positions = [
  createPosition(0, 30 * 0),
  createPosition(10, 30 * 1),
  // createPosition(20, 30 * 2),
  // createPosition(30, 30 * 3),
  // createPosition(40, 30 * 4),
  // createPosition(50, 30 * 5),
  // createPosition(60, 30 * 6),
  // createPosition(70, 30 * 7),
  // createPosition(80, 30 * 8),
  // createPosition(90, 30 * 9),
  // createPosition(100, 30 * 10),
  // createPosition(110, 30 * 11),
];

export default function Roulette() {
  const [spinning, setSpinning] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(positions[0]);
  const [repetitions, setRepetitions] = useState(0);
  const [duration, setDuration] = useState(0);
  const [angle0Count, setAngle0Count] = useState(0);
  const [angle0LimitReached, setAngle0LimitReached] = useState(false);

  useEffect(() => {
    const storedCount = localStorage.getItem('angle0Count');
    if (storedCount) {
      const count = Number(storedCount);
      if (count >= 2) {
        setAngle0LimitReached(true);
      }
      setAngle0Count(count);
    }
  }, []);

  function handleSpinClick() {
    if (spinning || angle0LimitReached) return;
    setRepetitions(0);
    setDuration(0);
    setSpinning(true);
    console.log(angle0Count);

    const timeout = setTimeout(() => {
      const newPosition = getRandomItem(positions);
      const repetitions = Math.round(Math.random() * 5) + 5;
      const newDuration = getDuration(repetitions);
      setCurrentPosition(newPosition);
      setRepetitions(repetitions);
      setDuration(newDuration);

      if (newPosition.angle === 0) {
        const updatedCount = angle0Count + 1;
        setAngle0Count(updatedCount);
        localStorage.setItem('angle0Count', updatedCount.toString());

        if (updatedCount >= 2) {
          setAngle0LimitReached(true);
        }
      }

      setTimeout(() => setSpinning(false), newDuration * 1000);
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
          $repetitions={repetitions}
        />
        <Button onClick={handleSpinClick} disabled={spinning || angle0LimitReached} $spinning={spinning}></Button>
      </Container>
      <Footer>
        <Link to={"/"}>
          <GoMenu>
            <LogoGame src={Menor} />
            Menu
          </GoMenu>
        </Link>
      </Footer>
    </PageContainer>
  );
}

function rotateNTimes(angle, repetitions) {
  const totalRotation = 360 * repetitions;
  const normalizedRotation = totalRotation + angle;
  return normalizedRotation * -1;
}

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getDuration(repetitions) {
  return repetitions * 1;
}
