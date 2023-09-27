import React, { useState } from "react";

function NewTodoForm({addTodo}) {
    const INITIAL_STATE = {
        task: ""
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
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input id="task" name="task" type='text' value={formData.task} onChange={handleChange}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodoForm