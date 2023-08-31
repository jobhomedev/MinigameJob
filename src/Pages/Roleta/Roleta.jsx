import React, { useState, useEffect } from 'react';
import {
  ArrowRoleta,
  Button,
  Container,
  RouletteContainer,
  Footer,
  GoMenu,
  LogoGame,
  Congratulations,
} from './style.js';
import { PageContainer } from '../../Components/Global/PageContainer.js';
import { Link } from 'react-router-dom';
import Title from '../../Components/Title.jsx';
import Menor from "../../assets/Menor.svg";
import Confetti from 'react-confetti';

const createPosition = (award, angle) => ({ award, angle });

const positions = [
  createPosition(0, 30 * 0),
  ...Array(10).fill([
    createPosition(10, 30 * 1),
    createPosition(20, 30 * 2),
    createPosition(30, 30 * 3),
    createPosition(40, 30 * 4),
    createPosition(50, 30 * 5),
    createPosition(60, 30 * 6),
    createPosition(70, 30 * 7),
    createPosition(80, 30 * 8),
    createPosition(90, 30 * 9),
    createPosition(100, 30 * 10),
    createPosition(110, 30 * 11),
  ]).flat()
];

export default function Roulette() {
  const [spinning, setSpinning] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(positions[0]);
  const [repetitions, setRepetitions] = useState(0);
  const [duration, setDuration] = useState(0);
  const [angleZeroCount, setAngleZeroCount] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showCongratulationsPlus, setShowCongratulationsPlus] = useState(false);

  useEffect(() => {
    let days = localStorage.getItem('days');
    if (!days) {
      localStorage.setItem('days', JSON.stringify({}));
      days = localStorage.getItem('days');
    }

    days = JSON.parse(days);

    const currentDate = new Date().toISOString().split('T')[0].replaceAll('-', '');

    if (!days[currentDate]) days[currentDate] = 0;

    localStorage.setItem('days', JSON.stringify(days));

    setAngleZeroCount(days[currentDate]);

  }, []);

  function handleSpinClick() {
    if (spinning) return;

    setRepetitions(0);
    setDuration(0);
    setSpinning(true);

    const timeout = setTimeout(() => {
      const includeAngleZero = angleZeroCount < 2;
      const availablePositions = includeAngleZero ? positions : positions.filter(pos => pos.award !== 0);

      const newPosition = getRandomItem(availablePositions);

      const repetitions = Math.round(Math.random() * 5) + 5;
      const newDuration = getDuration(repetitions);

      if (includeAngleZero && newPosition.award === 0) {
        setAngleZeroCount(angleZeroCount + 1);

        const days = JSON.parse(localStorage.getItem('days'));
        const currentDate = new Date().toISOString().split('T')[0].replaceAll('-', '');

        days[currentDate]++;
        localStorage.setItem('days', JSON.stringify(days));

        setTimeout(() => {
          setShowCongratulationsPlus(true); // Defina o estado após a roleta parar
          setShowCongratulations(false);
        }, newDuration * 1000 + 200); // Espera 200 milissegundos extras após a roleta parar

      }

      setCurrentPosition(newPosition);
      setRepetitions(repetitions);
      setDuration(newDuration);

      setTimeout(() => setSpinning(false), newDuration * 1000);
      setTimeout(() => {
        setShowCongratulations(true)
      }, newDuration * 1000 + 200);
    }, 1);
    return () => clearTimeout(timeout);
  }

  return (
    <PageContainer>
      { showCongratulationsPlus ? (
        <>
        <Confetti></Confetti>
          <Congratulations>
            Parabéns, você ganhou o prêmio plus.
          </Congratulations>
          <Congratulations>
            Um de nossos colaboradores irá lhe entregar o prêmio.
          </Congratulations>
          <Link to={"/"}>
            <GoMenu>
              <LogoGame src={Menor} />
              Menu
            </GoMenu>
          </Link>
        </>
      ) : showCongratulations ? ( // Expressão ternária para renderizar condicionalmente a tela de parabéns
        <>
        <Confetti></Confetti>
          <Congratulations>
            Parabéns, você tirou a sorte grande.
          </Congratulations>
          <Congratulations>
            Um de nossos colaboradores irá lhe entregar o prêmio.
          </Congratulations>
          <Link to={"/"}>
            <GoMenu>
              <LogoGame src={Menor} />
              Menu
            </GoMenu>
          </Link>
        </>
      ) : (
        <PageContainer>
          <Title>Roleta da Sorte</Title>
          <Container>
            <ArrowRoleta />
            <RouletteContainer
              $angle={rotateNTimes(currentPosition.angle, repetitions)}
              $duration={duration}
              $repetitions={repetitions}
            />
            <Button onClick={handleSpinClick} disabled={spinning} $spinning={spinning}></Button>
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
      )}
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
