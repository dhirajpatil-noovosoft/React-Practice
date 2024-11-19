import React, {useRef} from "react";
import RefChild from "./RefChild";
// import RefChild from "./RefChild";
export default function RefPar(){
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            console.log(inputRef.current.value);  // Log the value of the input
        }
    };

    return (
        <div>
            <RefChild ref={inputRef} />
            <button onClick={handleClick}>Log Input Value</button>
            <button>
                {inputRef?.current?.value}
            </button>
        </div>
    );
};