import React, { createContext } from "react";

import Header from "./Header";

import { useState } from "react";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {" "}
      <div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
      >
        <Header />
        <Speakers />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
