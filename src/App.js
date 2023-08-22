import Menu from "./Pages/Menu/Menu";
import { useState } from "react";
import backgroundGiz from './assets/backgroundGiz.jpg'
import TemaApertoMao from './assets/TemaApertoMao.svg'

function App() {

  const [backgroundImage, setBackgroundImage] = useState(backgroundGiz);

  const handleBackgroundImage = () => {
    if (backgroundImage === backgroundGiz) {
      setBackgroundImage(TemaApertoMao);
    } else {
      setBackgroundImage(backgroundGiz);
    }
  }

  return (
    <App/>
  );
}

export default App;
