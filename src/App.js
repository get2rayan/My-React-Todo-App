import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import API from './API'
//import config from 'config'

function App() {
  const LOCAL_STORAGE_KEY="todoApp.todos"
  const [todos, setTodo]=useState(null)
  const [requery, setRequery]=useState(false)
  const todoNameRef=useRef()

  //console.log('Node env is : ' + config.util.getEnv('NODE_ENV'))

  //#region "Local Data Store"
  /*useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function getTodos(){
      if(!!localStorage.getItem(LOCAL_STORAGE_KEY))
        return(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
      else
        return ([])    
  }*/
//#endregion "Local Data Store"
  async function fetchTodos(){  
    await API.get('todos').then((res)=>{
      setTodo(res.data.todos)
    })
  }

  useEffect(()=>{  
    fetchTodos()    
  },[requery])

//#region "API Service Data Store"
 /*async function getTodos(){
   return await API.get('todos').then((res)=>{
     setTodo(res.data.todo)
  })
  //return ([{_id:1, item: "Burger", complete:false}])
}*/
//#endregion

  function toggleTodo(id){
    const currentTodos = [...todos]
    const selTodo = currentTodos.find(todo=>todo._id===id)
    selTodo.complete=!selTodo.complete
    setTodo(currentTodos)
  }

  async function handleAdd(){    
    var todoItem=todoNameRef.current.value
    if(todoItem==='') return 
    await API.post('todos', { item: todoItem, complete: false}).then(()=>{
    // enable requery flag to trigger useEffect
      setRequery(prevRequery=>!prevRequery)
    })
    todoNameRef.current.value=null    
  }

   function handleClearComplete(){
    let todoList = [...todos].filter(todo=>todo.complete)
    if(todoList==null || todoList.length==0) return
    todoList.forEach(todo=>{
          API.delete('todos', {params: { id: todo._id }}).then(()=>{            
            setRequery(prevRequery=>!prevRequery)
        })
      })      
  }
    
  return (
      <div className="App">
        <div>
          My TodoList
          <TodoList todos={todos} toggleTodo={toggleTodo}/>
          <input type={Text} ref={todoNameRef}></input>
          <button onClick={handleAdd}>Add Todo</button>
          <button onClick={handleClearComplete}>Clear Complete</button>
        </div>
      </div>
  );
}

export default App;
