import { createContext, useContext } from "react";


const Todocontext = createContext({
    todo : [
        {
            id : 1 ,
            todo : "message",
            completed : false ,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    togglecomplete : (id) => {}, 
})

export const useTodo = () => {
    return useContext(Todocontext)
}
// Creating a Custom Hook for Easier Access
// This function useTodo() allows us to use the TodoContext anywhere in our app without needing to manually import useContext(TodoContext) every time.

export const TodoProvider = Todocontext.Provider;
export default Todocontext;
// TodoProvider is the actual component that will wrap around our app and provide the TodoContext values to its children.   