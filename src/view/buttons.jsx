import React from "react";
import Button from "../components/button";
import "./buttons.css";

const Buttons = () => {

    return (
        <div className="buttons-container">
            <Button title="Slope" />
            <Button title="Filter On" />

        </div>
    );
}

export default Buttons;