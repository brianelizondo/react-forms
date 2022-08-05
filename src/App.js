import React from "react";
import "./App.css";
import BoxList from "./BoxList";
import TodoList from "./TodoList";

function App(){
    return (
        <div className="App">
            <h1>Part 1 - Color Box Maker</h1>
            <div className="App-boxlist">
                <BoxList />
            </div>
            <div className="App-separator"></div>

            <h1>Part 2 - Todo App - List, Add, Remove Todos</h1>
            <div className="App-todo">
                <TodoList />
            </div>
        </div>
    );
}

export default App;
