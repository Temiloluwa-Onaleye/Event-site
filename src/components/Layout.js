import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const Layout = ({ startingTheme, children }) => {
  const [theme, setTheme] = useState(startingTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === startingTheme
            ? "container-fluid light"
            : "container-fluid dark"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
