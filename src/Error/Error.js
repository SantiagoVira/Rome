import React from "react";
import "./Error.css";
import RomeSVG from "./RomeSVG";

function Error() {
    return (
        <div className="Error404Main">
            <RomeSVG fill="#0f5257" width="30vw" />{" "}
            <h1 className="Error404Title">404 Error</h1>
            <p>
                We might be at war or this page might just not exist, who knows
            </p>
        </div>
    );
}

export default Error;
