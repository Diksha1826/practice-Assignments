import React , {createContext} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
const [ theme , setTheme] = React.useState("white")
const toggleTheme=()=>{
    setTheme( theme === "white" ? "black" : "white" )
}
    return( 
    <ThemeContext.Provider value={{theme , setTheme , toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}