import React, { useReducer, useRef } from "react";
import { setJob, addJob, removeJob } from "./action";
import logger from "./logger";
import reducer, {innitState} from "./reducer"


export default function Todo() {
  const [state, dispatchTodo] = useReducer(logger(reducer), innitState);

  const { job, jobs } = state;
  const inputElement = useRef();

  const handleChange = (e) => {
    dispatchTodo(setJob(e.target.value));
  };

  const handleAdd = () => {
    dispatchTodo(addJob(job));
    dispatchTodo(setJob(""));
    inputElement.current.focus();
  };

  const handleRemove = (index) => {
    dispatchTodo(removeJob(index));
  };

  localStorage.setItem("JOB", JSON.stringify(state));

  return (
    <div>
      <h1>Todo</h1>
      <input ref={inputElement} onChange={handleChange} value={job} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleRemove(index)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
