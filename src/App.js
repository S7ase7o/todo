
import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Components/Form/Form';
import List from './Components/List/List';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [textInput, setTextInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all"); //by default//
  const [filterTodo, setFilterTodo] = useState([]);

  //function//
  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodo();
  }, [todo, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todo.filter(todoh => todoh.completed == true));
        break;
      case "uncompleted":
        setFilterTodo(todo.filter(todoh => todoh.completed == false));
        break;
      default:
        setFilterTodo(todo);
        break;

    };
 
  };
  const saveLocalTodo = () => {
    localStorage.setItem("todo", JSON.stringify(todo));

  };
  const getLocal = () => {
    if (localStorage.getItem("todo") == null) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todo"))
      setTodo(todoLocal)
    }
  };
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todo={todo} setTodo={setTodo}
        textInput={textInput} setTextInput={setTextInput}
        setStatus={setStatus} status={status} />
      <List todo={todo} setTodo={setTodo} filterTodo={filterTodo} />

    </div>
  )
}

export default App



