import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './Pages/Menu/Menu';
import GameMemory from './Pages/Memoria/Memoria';
import Roulette from './Pages/Roleta/Roleta';
import Themes from './Pages/Temas/Temas';
import Divination from './Pages/Adivinha/Adivinha';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Menu/>
  },
  {
    path:"gamememory",
    element: <GameMemory/>,
  },
  {
    path:"roulette",
    element: <Roulette/>,
  },
  {
    path:"divination",
    element: <Divination/>,
  },
  {
    path:"themes",
    element:<Themes />,
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
