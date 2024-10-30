import React from 'react';
import './App.css';

function App() {
    let name = "React"

    const style = {
        backgroundColor : "black",
        color : "white",
        fontSize : "2rem",
        padding : "1rem",
    }

  return (
    <div style={style}>
        {
            name === "리액트" ? (<h1>YES</h1>) : (<h1>NO</h1>)
        }
        <p>HI!!</p>
    </div>
  );
}

export default App;
