import { Routes, Route } from "react-router-dom";
import Menu from './Pages/Menu/Menu.jsx'
import GameMemory from "./Pages/Memoria/Memoria.jsx";
import Themes from "./Pages/Temas/Temas.jsx";
import Divination from "./Pages/Adivinha/Adivinha.jsx";
import Roulette from "./Pages/Roleta/style.js";

export default function RoutesApplication() {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="gamememory" element={<GameMemory />} />
            <Route path="roulette" element={<Roulette />} />
            <Route path="divination" element={<Divination />} />
            <Route path="themes" element={<Themes />} />
        </Routes>
    )
}