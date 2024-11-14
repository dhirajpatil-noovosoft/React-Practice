import React, {useState, useEffect, Component} from "react";
const sculptureList = [
    {
        name:"name1",
        artist:"artist1",
        url : "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
        alt:"img1",
        description:"desc1"
    },
    {
        name:"name2",
        artist:"artist2",
        url : "https://www.shutterstock.com/image-vector/vector-scientific-illustration-structure-amino-acids-2210622663",
        alt:"img2",
        description:"desc2"
    }
]
export default function Gallery() {
    let index = 0;
    const [state, setStat] = useState(0)
    function handleClick()
    {
        setStat((state+1)%sculptureList.length);
        console.log(state)
    }

    useEffect(() => {
        console.log("state is : ", state)
        return (()=>
        {
            console.log("done: ", state)
        })
    }, [state]);
    let sculpture = sculptureList[state];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({(index + 1)} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}
