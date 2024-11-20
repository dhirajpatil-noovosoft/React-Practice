import React, {useState} from "react";
import Counter from "./Counter";
import Custom_hook from "./Custom_hook";

export default function CounterTrack(){
    const {state, onLoading} = Custom_hook(12);
    return (
        <>
            <button onClick={() => onLoading(state+1)}>
                Incrementing
            </button>
            <button onClick={() => onLoading(state-1)}>
                Decrementer
            </button>
            {state}
        </>
    );
}