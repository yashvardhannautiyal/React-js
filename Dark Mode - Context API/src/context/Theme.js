import { createContext } from "react";

//default values whenever a context is loaded first
export const ThemeContext = React.createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export default ThemeProvider = ThemeContext.Provider()

export default function useTheme(){
    return useContext(ThemeContext)
}