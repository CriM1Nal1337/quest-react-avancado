import React, {useContext} from "react";
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components";
import Pokemons from "../Pokemons";


export const Main = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <Mains style={{color: theme.color, backgroundColor: theme.background}}>
            <Pokemons/>
        </Mains>
    )
    
}
const Mains = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    height: 100vh;
    width: 100vw;
`

export default Main