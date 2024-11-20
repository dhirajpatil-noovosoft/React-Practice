import React, {useState} from 'react'
import _ from "lodash";
function createTodos(array? : string[]): string{
    return "dhiraj";
}
let z = 0;
function TodoList():JSX.Element {
    // This component function will run twice for every render.
    const prevTodos:string[] = ["a", "b", "c"]
    const [todos, setTodos] = useState(() => {
        console.log("hit ", z)
        // This initializer function will run twice during initialization.
        return prevTodos
    });
    function handle()
    {
        setTodos(prevTodos => {
            return [...prevTodos, "dhiraj"]
        })
    }
    function handleClick(){
        handle()
    }
    return<>
        <button onClick={handleClick}>
            handle
        </button>
        <div>
            {todos.map((ele) => ele)}
        </div>
    </>
}
export default TodoList;