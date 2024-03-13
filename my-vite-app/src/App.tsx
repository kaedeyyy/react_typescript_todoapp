import { useRef, useState } from 'react'
import { TodoList } from "./TodoList";
//import './App.css'

function App() {
  type Todo = {id: number; name: string; completed: boolean};
  
  const [todos, setTodos] = useState<Todo>({id: 0,name: '', completed: false});

  //入力されたタスクの取得
  const todoNameRef = useRef<HTMLInputElement>(null!);

  const handleAddTodo = () => {
    //タスクの追加
    const name = todoNameRef.current.value;
    console.log(name);
     if(name === ""){
       return;
     }

     
     setTodos(prevTodos => [
      ...prevTodos,
      { id: 1, name: name, completed: false }
    ]);
    

     todoNameRef.current.value = '';
  };
  
  
  return (
    <>
      <TodoList />
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>残りのタスク</div>
    </>
  )
}

export default App
