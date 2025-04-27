import { createContext, useContext } from "react";

//createContext(variables, methods)
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
})

//export the provider
export const ThemeProvider = ThemeContext.Provider

//export the custom context
export default function useTheme() {
    return useContext(ThemeContext)
}