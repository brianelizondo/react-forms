import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList(){
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    };
    const deleteBox = idBox => {
        setBoxes(boxes.filter(box => box.id !== idBox));
    };

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            <div className="BoxList-container">
                { boxes.map(box => <Box width={box.width} height={box.height} color={box.color} deleteBox={deleteBox} id={box.id} key={box.id} /> )}
            </div>
        </div>
    );
}

export default BoxList;