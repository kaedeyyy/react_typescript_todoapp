import React from 'react'

type todoProps = {
  id        : number,
  completed : boolean,
  name      : String
}

const Todo = ({todo,toggleTodo}:{todo: todoProps; toggleTodo: todoProps}) => {

  const handleTodoClick =  () => {
    //toggleTodo(todo.id);
  };

  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick}/>
        </label>
        {todo.name}
        
    </div>
  )
}

export default Todo