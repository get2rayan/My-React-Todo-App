import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4'

function App() {
  const LOCAL_STORAGE_KEY="todoApp.todos"
  //const [todos, setTodo]=useState([{id:1, item: "Burger", complete:false}, {id: 2, item:"Coke", complete:true}]);
  const [todos, setTodo]=useState(getTodos);
  const todoNameRef=useRef()

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function getTodos(){
      if(!!localStorage.getItem(LOCAL_STORAGE_KEY))
        return(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
      else
        return ([])    
  }

  function toggleTodo(id){
    const currentTodos = [...todos]
    const selTodo = currentTodos.find(todo=>todo.id===id)
    selTodo.complete=!selTodo.complete
    setTodo(currentTodos)
  }

  function handleAdd(){
    var todoItem=todoNameRef.current.value
    if(todoItem==='') return 
//    console.log(todoItem)
    setTodo(prevTodo => {
      return ([...prevTodo, {id: uuidv4(), item: todoItem, complete:false}])
    })
    todoNameRef.current.value=null
  }

  const handleClearComplete=()=>{
    let currentTodos= [...todos]
    currentTodos = currentTodos.filter(todo=>!todo.complete)
    setTodo(currentTodos)
  }
  return (
    <div className="App">
      My TodoList
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type={Text} ref={todoNameRef}></input>
      <button onClick={handleAdd}>Add Todo</button>
      <button onClick={handleClearComplete}>Clear Complete</button>
    </div>
  );
}

export default App;
