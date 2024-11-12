 import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function Header() {
  const {toggleTheme} = useContext (ThemeContext)

    return (
      <header>
        <h1>Aplicativo Demonstração</h1>
        <button onClick={toggleTheme}>Mudar Tema</button>
      </header>
    );
  }
  