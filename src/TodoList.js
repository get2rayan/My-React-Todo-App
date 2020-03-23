import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {                
    return (
        <div>
            { (todos!=null && todos.length>0)? (
                <div>
                   <div>
                        <ul>
                        {
                            todos.map(todo=>{
                                return (
                                        <Todo key={todo._id} toggleTodo={toggleTodo} todo={todo}/>
                                    );
                            })
                        }
                        </ul>
                    </div>
                    <div>
                        {todos.filter(todo=> todo.complete===true).length} complete out of {todos.length} items in list
                    </div>
                </div>
                ) : <div>No items in your list</div>
            }
        </div>
    );
}
