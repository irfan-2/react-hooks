import react from "react"
import { useState } from "react"

const TodoApp = () =>{
    const [todos, setTodos] = useState([])
    const [text, setText] = useState("")

    function handleAdd(e){
        e.preventDefault()
        setTodos((prev) => [...prev, {id: Date.now(), text, done: false}])
        setText("")
        console.log(todos);
        
    }

    function toggleTodo(id){
        setTodos((prev) => prev.map((t) => t.id === id ? {...t, done: !t.done} : t ))
    }

    function deleteTodo(id){
        setTodos((prev) => prev.filter((t) => t.id !== id))
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <label htmlFor="todo">Todo: </label>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" id="todo" placeholder="Enter your task" />
                <button>Add</button>
            </form>
            <ul>
                {todos.map((t) =>( 
                    <li key={t.id}> 
                    <p>{t.text}</p>
                    <span>{t.done ? <p>Task complete</p>: <p>Task incomlete</p>}</span>
                    <button onClick={() => toggleTodo(t.id)}>Done</button>
                    <button onClick={() => deleteTodo(t.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp