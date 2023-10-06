import React, {useContext} from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const Card = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <img></img>
        </div>
    )
}