import React, { useState } from "react";
import '../../styles/button-slope-filter.css'

const Button1 = (props) => {
    const [ inactive, active ] = useState("button");

    const update = () => {
        if(inactive === "button") {
            return (active("button actioned"))
        } else {active("button")}
    }

    return (
        <div className="container-button">
            <button type="button" className={inactive} onClick={update}>{props.title}</button>
        </div>
    );
}

export default Button1;