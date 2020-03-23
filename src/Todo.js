import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleChecked(){
        return toggleTodo(todo._id)
    }
    return (        
            <li>
                <input type="checkbox" checked={todo.complete} onChange={handleChecked}></input>
                <label>{todo._id} : {todo.item}</label>        
            </li>
    )};
