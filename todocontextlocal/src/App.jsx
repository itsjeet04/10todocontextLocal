import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoItem } from './components/TodoItems'

function App() {

  const [todo, setTodo] = useState([])

  const addTodo = (id) => {
    // setTodo((prev)=>[{id:Date.now(),...todo},...prev])   or
    setTodo((prev) => [{ id: Date.now(), todo: "newTodoText", completed: false }, ...prev])
  }

  const updateTodo = (id, todo) => {
    // callbackfn
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id))
  }
  // Uses filter() to create a new array that excludes the todo with the given id.


  const toggleComplete = (id) => {
    //console.log(id);
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))
    // spreading in object doesnt matter , can be done first or last doesnt matter 
  }


  // his useEffect hook is used to load saved todos from localStorage when the component mounts.
  useEffect(() => {
    // jSON.parse() =>	Convert string → object
    const todos = JSON.parse(localStorage.getItem("toodos"))
    if (todos && todos.length) {
      setTodo(todos)   //Update state if todos exist
    }
  }, [])

  useEffect(() => {
    // JSON.stringify() => converts object -> string
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo])

  return (
    <TodoProvider value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
