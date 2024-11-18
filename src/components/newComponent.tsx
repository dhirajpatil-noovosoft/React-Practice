import React from "react";
import {useState} from "react";
interface ShowProps{
    title:string;
    count:number;
}



function NewComponent():JSX.Element
{

    const [count, setCount] = useState(0);
    function increase()
    {
        return setCount(count+1);
    }
    function Show({title, count}: ShowProps){
        return (
            <input onClick={increase}>
                {title}
                {count}
            </input >
        )
    }
    return (
        <>
            <Show title={"this is title"} count={count}/>
        </>
    )
}

export default NewComponent;