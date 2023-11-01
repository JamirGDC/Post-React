import React from "react";
import ButtonPass from "../components/button-pass";
import "./pass.css";

const Pass = () => {

    return (
        <div>
            <div className="container-pass">
                <h2>Lowpass</h2>
            </div>
            <div className="container-button-pass">
                <div className="form-radio">
                    <input className="radio" type="radio" name="opt" />
                    <input className="radio" type="radio" name="opt" />
                    <input className="radio" type="radio" name="opt" />
                    <input className="radio" type="radio" name="opt" />
                    <input className="radio" type="radio" name="opt" />

                </div>


                <ButtonPass title="6" />
                <ButtonPass title="12" />
                <ButtonPass title="18" />
                <ButtonPass title="24" />
                <ButtonPass title="36" />
            </div>

        </div>
    );
}

export default Pass;