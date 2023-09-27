import React from "react";

function Box({width, height, color, removeSelf}) {
    return (
        <>
          <div 
            className="Box" 
            style={{width: Number(width), height: Number(height), backgroundColor: color}}
          >
          </div>
          <button className="delete" onClick={removeSelf}>X</button>
        </>
    )
}

export default Box;