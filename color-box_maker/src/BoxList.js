import { v4 as uuid } from 'uuid';
import React, { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

function BoxList() {
    const initialBoxes = []

    const [boxes, setBoxes] = useState(initialBoxes)

    function addBox(box) {
        let newBox = {...box, id: uuid()}
        setBoxes(boxes => [...boxes, newBox])
    }

    function removeBox(id) {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <>
          {boxes.map((box) => 
            <Box 
              key={box.id} 
              width={box.width} 
              height={box.height} 
              color={box.color} 
              removeSelf={(evt) => removeBox(box.id)} 
            />
          )}
        <NewBoxForm addBox={addBox}/>
        </>
    )
}

export default BoxList;