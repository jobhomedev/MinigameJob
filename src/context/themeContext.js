import themes from "../themes";
import React from "react";
const themeContext = React.createContext({
    currentTheme: themes[0],
    setCurrentTheme: () => { },
});
export default themeContext;