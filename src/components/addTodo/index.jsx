import React, { useState } from 'react';
import './index.css';

function AddTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="todo">
      <input 
        type="text" 
        placeholder="Add your new todo" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <button onClick={handleAddClick}>Add</button>
      <div className="wall"></div>
    </div>
  );
}

export default AddTodo;
