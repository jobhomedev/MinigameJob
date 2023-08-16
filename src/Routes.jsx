import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App.js'
import Menu from './Pages/Menu/Menu.jsx'
import GameMemory from "./Pages/Memoria/Memoria.jsx";

const Routes = () =>{
    return (
        <BrowserRouter>
            <Route exact path="/" Component={App}></Route>
            <Route exact path="/memoria" Component={GameMemory}></Route>
        </BrowserRouter>
    )
}

export default Routes;