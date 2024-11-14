import React from "react";
import {useTasksDispatch} from './TasksContext'
import {useState, useContext} from "react";
export default function AddTask({onAddTask}) {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return(
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={()=>
            {
                setText('');
                dispatch({
                    type:'added',
                    id: nextId++,
                    text:text,
                })
            }}>
                Add
            </button>
        </>
    )
}

let nextId = 3;