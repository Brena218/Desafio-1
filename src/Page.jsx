import { ThemeContext } from "./ThemeContextProvider";

import Header from './Header';
import { useContext } from 'react';

export default function Page() {
  const {isDarkTheme} = useContext(ThemeContext)
  return (
    <div id="app" className={isDarkTheme}>
      <Header />
      <article>
        <h2>Estágio</h2>
        <p>
          Um momento em que se reflete se vale a pena esse sofrimento todo!
        </p>
      </article>
    </div>
  );
}
