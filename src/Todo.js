import React from "react";

function Todo({ task, id, showEditForm, deleteTask }){
    const handleEdit = () => {
        showEditForm({ id, task });
    }
    const handleDelete = () => {
        deleteTask(id);
    }

    return (
        <div className="Todo">
            { task }
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>X</button>
        </div>
    );
}

export default Todo;