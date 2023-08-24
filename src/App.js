import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesApplication from "./Routes";
import themes from "./themes";
import themeContext from "./context/themeContext";
import { Container } from "./style.js";

function App() {

  // state que armazena o tema principal
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <Container $image={currentTheme.image}>

        <BrowserRouter>
          <RoutesApplication />
        </BrowserRouter>

      </Container>
    </themeContext.Provider>
  );
}

export default App;
