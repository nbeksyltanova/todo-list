import React from "react";

import "./App.css";

function App() {
  const [text, setText] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  function addTodo() {
    setTodo([...todo, text]);
    setText("");
  }
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={text}
          placeholder="добавить текст"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>+</button>
        <ol>
          {todo.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
