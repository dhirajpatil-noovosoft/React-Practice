import React from "react";
import useMultiState from "./Custom";

const UseMulti: React.FC = () => {
    const [state, setState] = useMultiState({
        string1: "",
        string2: "",
        counter: 0,
    });
    function change1():void
    {
        setState("string1", state.string1.split('').reverse().join(""))
        setState("counter", state.counter+1)
    }
    function change2():void
    {
        setState("string2", state.string1.split('').sort().join(""))
        setState("counter", state.counter+1)
    }
    return (
        <div>
            <input placeholder="string1" onChange={(e) => {
                setState("string1", e.target.value)
            }}/>
            <h1>{state.string1}</h1>
            <button onClick={change1}>
                reverse
            </button>
            <br/>
            <input placeholder="string2" onChange={(e) => {
                setState("string2", e.target.value)
            }}/>
            <br/>
            <h1>{state.string2}</h1>
            <button onClick={change2}>
                sort
            </button>
            <h1>The operations performed are : {state.counter}</h1>
        </div>
    );
};

export default UseMulti;