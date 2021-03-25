import React from 'react'
import Todo from '../Todo/Todo'

function List({todo, setTodo ,filterTodo}) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filterTodo.map((todoh)=>(
                    // console.log(todoh)
                    <Todo key={todoh.id} todoh={todoh} text={todoh.text}  setTodo={setTodo} todo={todo} />
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default List
