import React, { useState } from "react";

function NewTodoForm({ addTask }){
    const INITIAL_STATE = { task: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        addTask(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <div className="NewTodoForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task:</label>
                <input 
                    name="task" 
                    id="task"
                    placeholder="task"
                    value={formData.task} 
                    onChange={handleChange}
                />
                
                <button>Add Task!</button>
            </form>
        </div>
    );
}

export default NewTodoForm;