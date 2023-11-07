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
    width: 100vw;
    min-height: 81.99vh;
`

export default Main