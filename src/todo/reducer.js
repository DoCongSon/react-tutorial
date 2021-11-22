import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./constants";

export const innitState = JSON.parse(localStorage.getItem("JOB")) ?? {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case REMOVE_JOB:
      let newJob = [...state.jobs];
      newJob.splice(action.payload, 1);
      return {
        ...state,
        jobs: [...newJob],
      };
    default:
      throw new Error("invalid action: " + action);
  }
};

export default reducer;