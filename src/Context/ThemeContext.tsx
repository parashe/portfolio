import React from "react";


export const ThemeContext = React.createContext({
    theme: "light",
    darktheme: () => {},
    lighttheme: () => {},
})

export const ThemeContextProvider= ThemeContext.Provider;


export default function useTheme() {
    return React.useContext(ThemeContext);
  }
  