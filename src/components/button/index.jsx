import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <Buttons {...props}
            style={{ color: theme.color, backgroundImage: theme.backgroundImage }} />
    )
}

const Buttons = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    height: 10rem;
    width: 10rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    @media (max-width: 645px) {
        height: 7rem;
        width: 7rem;
      }
`;