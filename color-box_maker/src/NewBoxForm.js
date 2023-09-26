import React, { useState } from "react";

function NewBoxForm({addBox}) {
    const INITIAL_STATE = {
        width: '0',
        height: '0',
        color: "#000000"
      };

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    };

    function handleSubmit(evt){
        evt.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input id="width" name="width" type='number' value={formData.width} onChange={handleChange}/>
            <label htmlFor="height">Height</label>
            <input id="height" name="height" type='number' value={formData.height} onChange={handleChange}/>
            <label htmlFor="color">Color</label>
            <input id="color" name="color" type='color' value={formData.color} onChange={handleChange}/>
            <button type="submit">Add Box</button>
        </form>
    )
}

export default NewBoxForm