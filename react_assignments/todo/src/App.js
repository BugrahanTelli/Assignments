import './App.css';
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState(""); 
  const [list, setList] = useState([]); 

  const addItem = () => {
    if (items.trim() === "") return;
    const newItem = { id: Date.now(), text: items, completed: false };
    setList([...list, newItem]);
    setItems("");    
  };

  const enterKey = (e) => {
    if (e.key === "Enter") 
      addItem();
  };

  const toggleCompletion = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeItem = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <input
          className='text'
          type="text"
          value={items}
          placeholder="Bir Todo girin"
          onChange={(e) => setItems(e.target.value)}
          onKeyPress={enterKey}
        />
        <button onClick={addItem} className='addbtn'>Add</button>
        
        <h3>Todo List</h3>
        <ul>
          {list.filter(item => !item.completed).map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                className='box'
                checked={item.completed}
                onChange={() => toggleCompletion(item.id)}
              />
              <span>{item.text}</span>
              <button className='removebtn' onClick={() => removeItem(item.id)}>X</button>
            </li>
          ))}
        </ul>
        
        <hr />
        <h3>Completed</h3>
        <ul>
          {list.filter(item => item.completed).map((item) => (
            <li key={item.id}>
              {item.text}
              <button className='removebtn' onClick={() => removeItem(item.id)}>X</button> {/* Use item's ID for removal */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;