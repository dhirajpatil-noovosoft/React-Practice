import React, {useState} from "react";
interface UseCustomHookReturn {
    state: number;
    onLoading: (x : number) => void;
}

export default function Custom_hook(count:number):UseCustomHookReturn {
    const [state, setState] = useState(0);
    function onLoading(cnt:number) : void
    {
        setState(cnt)
    }
    return {state, onLoading};
}