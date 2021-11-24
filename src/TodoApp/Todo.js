import { useRef } from "react";
import { UseStore } from "./store";
import { Actions } from "./store";

export default function Todo() {
  const [state, dispatch] = UseStore();
  const inputElement = useRef();
  const { todo, todoList } = state;

  const handleSET = (e) => {
    dispatch(Actions.setTodo(e.target.value));
  };

  const handleADD = () => {
    dispatch(Actions.addTodo(todo));
    dispatch(Actions.setTodo(""));
    inputElement.current.focus();
  };

  const handleREMOVE = (index) => {
    dispatch(Actions.removeTodo(index));
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input ref={inputElement} onChange={handleSET} value={todo} />
      <button onClick={handleADD}>Add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo} <span onClick={() => handleREMOVE(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
