import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./BoxList.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";

function TodoList(){
    const INITIAL_STATE = [];
    const EDIT_INITIAL_STATE = { show: false, id: "", todo: "" };
    const [todos, setTodos] = useState(INITIAL_STATE);
    const [editTodo, setEditTodo] = useState(EDIT_INITIAL_STATE);

    const showEditForm = task => {
        setEditTodo({
            show: true,
            ...task
        });
    };

    const addTask = task => {        
        let newTask = { ...task, id: uuid() };
        setTodos(tasks => [...tasks, newTask]);
    };
    const editTask = updateTask => {
        let updateTodos = todos.map(todo => {
            if(todo.id === updateTask.id){
                return {
                    ...todo,
                    task: updateTask.task
                }
            }
            return {...todo}
        });
        setTodos(tasks => updateTodos);
        setEditTodo(EDIT_INITIAL_STATE);
    };
    const deleteTask = idTask => {
        setTodos(todos.filter(todo => todo.id !== idTask));
    };

    return (
        <div className="TodoList"> 
            <NewTodoForm addTask={addTask} />
            <div className="TodoList-container">
                { 
                    todos.map(todo => <Todo task={todo.task} id={todo.id} key={todo.id} showEditForm={showEditForm} deleteTask={deleteTask} /> )
                }
                {editTodo.show && <EditTodoForm id={editTodo.id} task={editTodo.task} editTask={editTask} />}
            </div>
        </div>
    );
}

export default TodoList;