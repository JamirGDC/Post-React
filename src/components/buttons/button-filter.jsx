import React, { useState } from "react";
import '../../styles/button-slope-filter.css'

const Button2 = (props) => {
    const [ inactive, active ] = useState("button");
    const [ off, on ] = useState("Off");
    const [ nope, rainbow ] = useState("")

    const update = () => {
        if(inactive === "button") {
            return (<>{active("button actioned")}; {on("On")}; {rainbow("filter")}
            </>)
        } else {active("button"); on("Off"); rainbow(" ")}
    }

    return (
        <div className="container-button">
            <button type="button" className={inactive} onClick={update}>{props.title}&nbsp;<p className={nope}>{off}</p></button>
        </div>
    );
}

export default Button2;