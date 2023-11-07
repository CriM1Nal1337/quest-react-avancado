import React, {useContext} from "react";
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components";
import { ThemeTogglerButton } from "../theme-toggler-button";

export const Header = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <Headers style={{color: theme.color, backgroundColor: theme.background, borderBottom: `0.3rem solid ${theme.color}`}}>
            <DivLogo>
                <Logo src="public/images/logo.png" alt="logo"></Logo>
                
            </DivLogo>
            <H1>Lista de Pokemons</H1>
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
    position: relative;
    top: 0;
    transition: 0.3s ease-in-out;
    @media (max-width: 645px) {
        padding: 1rem 1rem;
      }
`

const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
    width: 13rem;
    padding: 1rem;
    @media (max-width: 645px) {
        width: 9rem;
      }
`

const H1 = styled.h1`
      font-size: 3rem;
@media (max-width: 645px) {
    font-size: 1.8rem;
  }
`

export default Header