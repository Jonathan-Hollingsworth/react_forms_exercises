import { v4 as uuid } from 'uuid';
import React, { useState } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

function TodoList() {
    const initialTodos = []

    const [todos, setTodos] = useState(initialTodos)

    function addTodo(todo) {
        let newTodo = {...todo, id: uuid()}
        setTodos(todos => [...todos, newTodo])
    }

    function removeTodo(id) {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    return (
        <>
          <section className='Todos'>
            {todos.map((todo) => 
              <Todo 
                key={todo.id} 
                task={todo.task}
                removeSelf={(evt) => removeTodo(todo.id)} 
              />
            )}  
          </section>
        <NewTodoForm addTodo={addTodo}/>
        </>
    )
}

export default TodoList;