import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    // todo: A string that holds the current value typed in the input field.
    const {addTodo} = useTodo()
    // You're grabbing the addTodo function from your custom Todo Context, which is used to add a new todo to the list.

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    //   Clears the input after submission.
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
            //   In React, a controlled input is an input element (like <input> or <textarea>) whose value is controlled by React state.
            //“The value of this input box is stored in the todo state, and anytime someone types into it, update that state.”
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}
export default TodoForm;