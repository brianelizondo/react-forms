import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./BoxList.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList(){
    const INITIAL_STATE = [];
    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTask = task => {
        let newTask = { ...task, id: uuid() };
        setTodos(tasks => [...tasks, newTask]);
    };
    const deleteTask = idTask => {
        setTodos(todos.filter(todo => todo.id !== idTask));
    };

    return (
        <div className="TodoList"> 
            <NewTodoForm addTask={addTask} />
            <div className="TodoList-container">
                { todos.map(todo => <Todo task={todo.task} id={todo.id} key={todo.id} deleteTask={deleteTask} /> )}
            </div>
        </div>
    );
}

export default TodoList;