import React, { useState } from "react";
import "./Box.css";

function Box({ color, width, height, deleteBox, id }){
    const handleClick = () => {
        deleteBox(id);
    }

    return (
        <div className="Box">
            <div style={{backgroundColor: color, width:`${width}px`, height:`${height}px`}}></div>
            <button onClick={handleClick}>X</button>
        </div>
    );
}

export default Box;