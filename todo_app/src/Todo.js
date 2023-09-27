import React from "react";

function Todo({task, removeSelf}) {
    return (
        <>
          <div className="Todo">{task}</div>
          <button className="delete" onClick={removeSelf}>X</button>
        </>
    )
}

export default Todo;