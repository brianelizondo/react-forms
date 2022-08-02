import React, { useState } from "react";

function Box({ color, width, height }){
    return (
        <div className="Box" style={`background-color: ${color}; height: ${width}px; width: ${height}px;`}></div>
    );
}

export default Box;