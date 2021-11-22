import React, { useReducer, useRef } from "react";

// counter
const innitialCounter = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducerCounter = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action: " + action);
  }
};

// Todo
const innitState = JSON.parse(localStorage.getItem("JOB")) ?? {
  job: "",
  jobs: [],
};

const SET_JOB = "set";
const ADD_JOB = "add";
const REMOVE_JOB = "remove";

// payload: giá trị mang theo
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const removeJob = (payload) => {
  return {
    type: REMOVE_JOB,
    payload,
  };
};

const reducerTodo = (state, action) => {
  console.log("state cũ: ", state);
  console.log("action: ", action);
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case REMOVE_JOB:
      let newJob = [...state.jobs];
      newJob.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: [...newJob],
      };
      break;
    default:
      throw new Error("invalid action: " + action);
  }
  console.log("state mới: ", newState);
  return newState;
};

export default function UseReducer() {
  const [counter, dispatchCounter] = useReducer(
    reducerCounter,
    innitialCounter
  );
  const [state, dispatchTodo] = useReducer(reducerTodo, innitState);

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
      <h1>{counter}</h1>
      <button onClick={() => dispatchCounter(UP_ACTION)}>Up</button>
      <button onClick={() => dispatchCounter(DOWN_ACTION)}>Down</button>
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
