import React from 'react';

const Todo = ({todos, deleteTodo}) => {
    
    
    if (todos == '') {
        return (
            <p>No todo's left</p>
        )
      } 
const todoList = todos.map(todo => {
    return (
        <div key={todo.id}>
            <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
    )
})
      
    return (
        <div className="Todo">
            {todoList}
        </div>
    )
}

export default Todo