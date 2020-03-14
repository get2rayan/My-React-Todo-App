import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleChecked(){
        return toggleTodo(todo.id)
    }
    return (        
            <li>
                <input type="checkbox" checked={todo.complete} onChange={handleChecked}></input>
                <label>{todo.id} : {todo.item}</label>        
            </li>
    )};
