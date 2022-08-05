import React from "react";

function Todo({ task, id, deleteTask }){
    const handleClick = () => {
        deleteTask(id);
    }

    return (
        <div className="Todo">
            { task }
            <button onClick={handleClick}>X</button>
        </div>
    );
}

export default Todo;