import { Routes, Route } from "react-router-dom";
import Menu from './Pages/Menu/Menu.jsx'
import GameMemory from "./Pages/Memoria/Memoria.jsx";
import Themes from "./Pages/Temas/Temas.jsx";
import Divination from "./Pages/Adivinha/Adivinha.jsx";
import Roulette from "./Pages/Roleta/Roleta.jsx";
import MemoryRules from "./Pages/MemoryRules/MemoryRules.jsx";
import DivinationRules from "./Pages/DivinationRules/DivinationRules.jsx";
import RouletteRules from "./Pages/RouletteRules/RouletteRules.jsx";

export default function RoutesApplication() {
    return (
        <Routes>
            <Route exact path="" element={<Menu />} />
            <Route exact path="/" element={<Menu />} />
            <Route path="/gamememoryrules" element={<MemoryRules/>} />
            <Route path="/gamememory" element={<GameMemory />} />
            <Route path="/rouletterules" element={<RouletteRules />} />
            <Route path="/roulette" element={<Roulette />} />
            <Route path="/divinationrules" element={<DivinationRules />} />
            <Route path="/divination" element={<Divination />} />
            <Route path="/themes" element={<Themes />} />
        </Routes>
    )
}