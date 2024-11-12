import React from "react";
function ListOfProducts (){
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];
    const list = products.map((product)=>
        {
            return (
            <>
                <h1>{product.title}</h1>
                <h2>{product.id}</h2>
            </>)
        }
    )
    return (
        <ul>{list}</ul>
    )
}

export default ListOfProducts;