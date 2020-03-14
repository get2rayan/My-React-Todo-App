import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
    return (
        <div>
            <div><ul>
                {
                /*  *don't use document.write 
                    todos.forEach(element => {
                        document.write("<li>" + element + "</li>")
                    })
                */
                    todos.map(todo=>{
                        return (
                                <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
                            );
                    })
                    /*<Todo todo={todos.length}/>*/
                }
                </ul>
            </div>
            <div>
            {todos.filter(todo=> todo.complete===true).length} complete out of {todos.length} items in list
            </div>
        </div>
    );
}
