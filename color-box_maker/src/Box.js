import React from "react";

function Box({width, height, color, removeSelf}) {
    return (
        <>
          <div 
            className="box" 
            style={{width: Number(width), height: Number(height), backgroundColor: color}}
          >
          </div>
          <button onClick={removeSelf}>X</button>
        </>
    )
}

export default Box;