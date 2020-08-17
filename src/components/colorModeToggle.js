import React from "react"
import { useColorMode, useThemeUI } from "theme-ui"

export default props => {
  const [colorMode, setColorMode] = useColorMode();
  const theme = useThemeUI().theme;

  return (
    <button
      {...props}
      onClick={e => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      }}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </button>
  )
}
