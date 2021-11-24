import { ADD_TODO, REMOVE_TODO, SET_TODO } from "./constants";

export const innitState = {
  todoList: [],
  todo: "",
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case REMOVE_TODO:
      const newTodoList = [...state.todoList];
      newTodoList.splice(action.payload, 1);
      return {
        ...state,
        todoList: [...newTodoList],
      };
    default:
      throw new Error("invalid action type: " + action.type);
  }
}
