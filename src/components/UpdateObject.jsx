import React, {useState} from "react";
import {produce} from "immer";
export default function UpdateObject()
{
    const [state, setState] = useState({
        x:50,
        y:50
    })
    function handleClick()
    {
        setState((state)=>
                produce(state, (draftstate)=>
                    {
                        draftstate.x = draftstate.x / 10;
                        draftstate.y= draftstate.y * 1000;
                    }
                )
    )
    }

    return <>
        <p onClick={handleClick}>
            <h1>{state.x}</h1>
            <h1>{state.y}</h1>
        </p>
    </>
}