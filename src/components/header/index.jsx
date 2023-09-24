import React from "react";
import styled from "styled-components";
import { ThemeButton } from "../themebutton";

export const Header = () => {
    return (
        <Headers>
            <div>
                <img src="public/images/logo.png" alt="logo"></img>
                <h1>Lista de Pokemons</h1>
            </div>
            <div>
                <ThemeButton />
            </div>
        </Headers>
    )
}

const Headers = styled.header`
    display: flex;
    justify-content: space-between;
`

export default Header