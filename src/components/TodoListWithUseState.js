import React, { useState } from "react";

export default function TodoListWithUseState() {
  const storage = JSON.parse(localStorage.getItem("todoList")) ?? [];
  const [item, setItem] = useState();
  // toán tử ?? trả về vế phải nếu vế trái là null or undefined
  const [arrItem, setArrItem] = useState(() => storage);
  const handleClick = (item) => {
    if (item) {
      setArrItem((prev) => {
        const newArrItem = [...prev, item];
        localStorage.setItem("todoList", JSON.stringify(newArrItem));
        return newArrItem;
      });
      setItem("");
    }   
  };
  return (
    <div>
      <h1>Todo list</h1>
      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={() => handleClick(item)}>Add</button>
      <ul>
        {arrItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
