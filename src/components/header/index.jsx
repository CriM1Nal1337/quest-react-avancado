import React, {useContext} from "react";
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components";
import { ThemeTogglerButton } from "../theme-toggler-button";


export const Header = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <Headers style={{color: theme.color, backgroundColor: theme.background}}>
            <DivLogo>
                <Logo src="public/images/logo.png" alt="logo"></Logo>
                <h1>Lista de Pokemons</h1>
            </DivLogo>
            <ThemeTogglerButton/>
        </Headers>
    )
    
}
const Headers = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 1rem 10rem;
    position: fixed;
    top: 0;
    transition: 0.7s ease-in-out;
`

const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
    width: 13rem;
    padding: 1rem;
    margin-right: 4rem;
`

export default Header