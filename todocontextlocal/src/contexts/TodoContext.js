import { createContext, useContext } from "react";



export default Todocontext = createContext({
    todo : [
        {
            id : 1 ,
            todo : "message",
            completeed : false ,
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

export const TodoProvider = Todocontext.Provider