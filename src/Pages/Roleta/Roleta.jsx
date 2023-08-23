import React from 'react';
import Roulette from './style.js';
import { PageContainer } from '../../Components/Global/PageContainer.js';
import BackgroundGiz from '../../assets/backgroundGiz.jpg';

const App = () => {
  return (
    <PageContainer backgroundImage={BackgroundGiz}>
      <h1>Roleta Girando</h1>
      <Roulette />
    </PageContainer>
  );
};

export default App;