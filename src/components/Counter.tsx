import React, { useState } from 'react';
interface prop{
    count:number
}
export default function Counter({ count } : prop) {
    const [prevCount, setPrevCount] = useState(count);
    const [trend, setTrend] = useState<string | null>(null);
    if (prevCount !== count) {
        setPrevCount(count);
        setTrend(count > prevCount ? 'increasing' : 'decreasing');
    }
    return (
        <>
            {console.log("counter rendered")}
            <h1>{count}</h1>
            {trend && <p>The count is {trend}</p>}
        </>
    );
}

/*
a b a a b
0 0 1 1 2


0 1 2 0
5 5 5 1 1 1
 */
