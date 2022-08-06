import React from "react";
import "./Todo.css"

function Todo({ task, id, showEditForm, completedTaskStatus, completedTask, deleteTask }){
    const handleEdit = () => {
        showEditForm({ id, task });
    }
    const handleCompleted = () => {
        completedTask(id);
    }
    const handleDelete = () => {
        deleteTask(id);
    }

    const completedButtonText = completedTaskStatus == false ? "Mark as completed" : "Mark as not completed";
    const classStyle = completedTaskStatus == false ? "Todo" : "Todo Todo-completed";

    return (
        <div className={classStyle}>
            { task }
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleCompleted}>{completedButtonText}</button>
            <button onClick={handleDelete}>X</button>
        </div>
    );
}

export default Todo;