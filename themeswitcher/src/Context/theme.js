import { useContext } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({

    themeMode: "Light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}