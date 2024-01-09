import {useState} from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';


let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
    { id: 3, title: 'shaviolas', done: true },
]

const Todo = () => {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodos = (title)=>{
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }
    const handleChangeTodo = (nextTodo) =>{
        setTodos(todos.map(t => {
            if(t.id === nextTodo.id){
                return nextTodo;
            }else{
                return t;
            }
        }))
    }
    const handleDeleteTodo = (todoId)=>{
        setTodos(todos.filter(t=> t.id !== todoId))
    }
  return (
    <>
    <AddTodo
      onAddTodo={handleAddTodos}
    />
    <TaskList 
     todos={todos}
     onChangeTodo={handleChangeTodo}
     onDeleteTodo={handleDeleteTodo}
    />
    </>
  )
}

export default Todo