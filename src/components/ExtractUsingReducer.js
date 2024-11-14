import React from "react";
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import {TasksProvider} from "./TasksContext"
export default function TaskApp()
{
    return(
        <>
            <TasksProvider>
                <h1>DayO Off in Kyoto</h1>
                <AddTask />
                <TaskList />
            </TasksProvider>
        </>
    )
}