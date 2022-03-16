import React, { useContext } from "react";
import "./toggle.css";
import paike from "../../pildid/paike.png"
import kuu from "../../pildid/kuu.jpg"
import { ThemeContext } from "../../context";

function Toggle() {
    const theme = useContext(ThemeContext)

    const handleClick = () =>{
        theme.dispatch({type:"TOGGLE"})
    }
  return <div className="t">
            <img className="t-icon" src={paike} alt="" />
            <img className="t-icon" src={kuu} alt="" />
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
          </div>;
}

export default Toggle;
