import React, { useState } from "react";
import styled from "styled-components";

export const ThemeButton = () => {
    const [isSun, setIsSun] = useState(true);

    const changeBackground = () => {
        setIsSun(!isSun);
    };

    const backgroundImageUrl = isSun
        ? "../../../public/images/sol.jpg"
        : "../../../public/images/Lua.png";

    return (
        <ThemeButtonContainer
            issun={isSun.toString()}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            onClick={changeBackground}
        />
    );
};

const ThemeButtonContainer = styled.div`
  background-size: contain;
  height: 10rem;
  width: 9.5rem;
  cursor: pointer;
  transition: 0.7s ease-in-out;
`;

export default ThemeButton