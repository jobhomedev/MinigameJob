import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Container } from "./style.js";
import RoutesApplication from "./Routes";
import themes from "./themes";
import themeContext from "./context/themeContext";
import './index.css';

function App() {

  // state que armazena o tema principal
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <Container className="hanken" $image={currentTheme.image}>

        <BrowserRouter>
          <RoutesApplication />
        </BrowserRouter>

      </Container>
    </themeContext.Provider>
  );
}

export default App;
