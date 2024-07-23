import './App.css';
import React, { useState } from 'react';
import AddTodo from './components/addTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
