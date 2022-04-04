import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoAction';
import './App.css';

function App() {
  const[todo,setTodo]=useState();
  const dispatch= useDispatch();
  const Todo=useSelector(state => state.Todo);
  const {todos}=Todo;
  const handleSumbit=(e)=>{
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  }
  const removeHandler=(t)=>{
    dispatch(RemoveTodoAction(t));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Todo App</h2>
        <form onSubmit={handleSumbit}>
          <input placeholder='Enter a Todo' style={{width:350,padding:10,borderRadius:20,border:"none",fontSize:20}} onChange={(e)=>setTodo(e.target.value)}/>
          <button type="submit" style={{
            padding:12,
            marginLeft:20,
            borderRadius:25,
            fontSize:15
          }}>Go</button>
        </form>
        <ul className="allTodos">
          {
            todos&&todos.map(t =>{
              return <li key={t.id} className="singleTodo">
            <span className="todoText">{t.todo}</span>
            <button  style={{
            padding:10,
            borderRadius:25,
            fontSize:15,
            border:"1px solid white",
            color:"white",
            backgroundColor:"orangered"
            }} onClick={()=>removeHandler(t)}>Delete</button>
            </li>
            })
          }
          
        </ul>
      
      </header>
    </div>
  );
}

export default App;
