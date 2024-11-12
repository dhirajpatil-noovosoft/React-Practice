import React from 'react';
import MyButton from './components/MyButton'
import ListOfProducts from './components/ListOfProducts'
import NewComponent from "./components/newComponent";
import './App.css';

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
    </div>
  );
}

export default App;
