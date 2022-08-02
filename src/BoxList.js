import React, { useState } from "react";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList(){

    return (
        <div className="BoxList">
            <Box color={color} width={width} height={height} />
        </div>
    );
}

export default BoxList;