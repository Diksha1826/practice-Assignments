import React, { createContext, useState } from 'react' ;

export const ThemeContext = createContext();

export const Themeprovider = ({children})=>{
    const [theme , setTheme] = useState("dark")
    const toggleTheme = ()=>{
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }
    return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}
