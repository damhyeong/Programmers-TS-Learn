import React from 'react';
import './App.css';
import TestClass from "./TestClass";
import TestFunc from "./TestFunc";
import TodoList from "./TodoList";
import Timer from "./Timer";
import Clock from "./Clock";

function App() {
    let name = "React"

  return (
    <div className="container">
        <TestClass/>
        <TestFunc/>
        <TodoList/>
        <Timer/>
        <Clock/>
    </div>
  );
}

export default App;
