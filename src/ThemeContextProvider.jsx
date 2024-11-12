import { createContext, useContext, useState } from "react";

// Todo: Create & manage context in this file
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState();

    // Todo: Add the component code (incl. dynamic context value)
    const toggleTheme = () =>{
      setIsDarkTheme(prevTheme =>(prevTheme === "light"? "dark": "light"))
    } 

    return (
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);
