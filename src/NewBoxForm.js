import React, { useState } from "react";

function NewBoxForm({ addBox }){
    const INITIAL_STATE = {
        width: "",
        height: "",
        color: ""
    };
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
        addBox(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <div className="NewBoxForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="width">Box width:</label>
                <input 
                    name="width" 
                    id="width"
                    placeholder="box width"
                    value={formData.width} 
                    onChange={handleChange}
                />

                <label htmlFor="height">Box height:</label>
                <input 
                    name="height" 
                    id="height"
                    placeholder="box height"
                    value={formData.height} 
                    onChange={handleChange}
                />

                <label htmlFor="color">Box color:</label>
                <input 
                    name="color" 
                    id="color"
                    placeholder="box color"
                    value={formData.color} 
                    onChange={handleChange}
                />
                
                <button>Add Box!</button>
            </form>
        </div>
    );
}

export default NewBoxForm;