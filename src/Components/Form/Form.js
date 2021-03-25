import React from 'react'

function Form({setTextInput ,textInput ,todo ,setTodo ,setStatus}) {
    const textInputHandler=(e)=>{
        setTextInput(e.target.value)
    
    };
    const sumbitTextHandler =(e)=>{
        e.preventDefault();
        setTodo([
            ...todo , {text : textInput , completed : false , id:Math.random()*1000}
        ]);
        
        setTextInput("");
    };
    const statusHandler = (e)=>{
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input value={textInput} onChange={textInputHandler} type="text" className="todo-input" />
                <button onClick={sumbitTextHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
