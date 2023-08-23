import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesApplication from "./Routes";
import themes from "./themes";

// Função principal do app
function App() {
  // state que armazena o tema principal
  // const [currentTheme, setCurrentTheme] = useState(themes[0]);
  console.log(themes);
  return (<BrowserRouter>
    <RoutesApplication />
  </BrowserRouter>
  );
}

export default App;
