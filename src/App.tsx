import React from 'react';
import MyButton from './components/MyButtonState'
import ListOfProducts from './components/ListOfProducts'
import NewComponent from "./components/newComponent";
import Form from "./components/form";
import Counter from "./components/stateClass";
import './App.css';
import BasicComponent from "./components/basicComponent";
import ClassExample from "./components/ClassExample";
import StateComponentMemory from "./components/StateComponentMemory"
import VideoPlay from "./components/VideoPlay";
import UpdateObject from "./components/UpdateObject";
import ArrayMutation from "./components/ArrayMutation"
function App() {
    let cmp;
    if(5 <= 4)
        cmp = <MyButton/>;
    else
        cmp = <NewComponent />;
  return (
    <div className="App">
        {cmp}
        <ListOfProducts/>
        <BasicComponent name={"dhiraj"} />
        <Form />
        <Counter name={"curr"} />
        <ClassExample message={"this is the msg"}/>
        <StateComponentMemory />
        <VideoPlay />
        <UpdateObject />
        <ArrayMutation />
    </div>
  );
}

export default App;
