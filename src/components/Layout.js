import { useContext } from "react";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Layout = ({ startingTheme, children }) => {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
};

const LayoutNoThemeProvider = ({ startingTheme, children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === startingTheme
          ? "container-fluid light"
          : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
};

export default Layout;
