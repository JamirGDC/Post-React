import React from "react";
import Button1 from "./buttons/button-slope";
import Button2 from "./buttons/button-filter";
import '../styles/button-container.css'

const Buttons = () => {

    return (
        <div className="buttons-container">
            <Button1 title="Slope" />
            <Button2 title="Filter" />
        </div>
    );
}

export default Buttons;