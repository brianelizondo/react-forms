import React, { useState } from "react";

function EditTodoForm({ id, task, editTask }){
    const [formData, setFormData] = useState({ task });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        editTask({id, task: formData.task});
    }

    return (
        <div className="EditTodoForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Edit Task:</label>
                <input 
                    name="task" 
                    id="task"
                    placeholder="task"
                    value={formData.task} 
                    onChange={handleChange}
                />
                
                <button>Edit Task!</button>
            </form>
        </div>
    );
}

export default EditTodoForm;