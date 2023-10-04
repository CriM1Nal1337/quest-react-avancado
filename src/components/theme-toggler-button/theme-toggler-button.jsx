import React, { useContext } from 'react'
import { ThemeContext, themes } from "../../contexts/theme-context"
import ThemeButton from "../themebutton"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
            <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}/>
    )
}