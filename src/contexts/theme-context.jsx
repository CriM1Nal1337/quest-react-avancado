import { createContext, useState } from "react"

export const themes = {
    light: {
        color: 'hsla(0, 0%, 0%, 0.819)',
        background: '#ffffff',
        backgroundImage: 'url(../public/images/Sol.png)'
    },
    dark: {
        color: '#ffffff',
        background: 'hsla(0, 0%, 0%, 0.819)',
        backgroundImage: 'url(../public/images/Lua.png)'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}