import React, {useContext} from "react";
import { ThemeContext } from '../../contexts/theme-context';
import styled from "styled-components";
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button";
import { themes } from "../../contexts/theme-context";
console.log(themes);
export const Header = () => {
    return (
        <Headers >
            <DivLogo>
                <Logo src="public/images/logo.png" alt="logo"></Logo>
                <h1>Lista de Pokemons</h1>
            </DivLogo>
            <div>
                <ThemeTogglerButton />
            </div>
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