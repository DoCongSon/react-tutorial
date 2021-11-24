const logger = (reducer) => {
  return (prevState, action) => {
    console.group(action.type);
    console.log("prevState: ", prevState);
    console.log("action: ", action.type);
    const nextState = reducer(prevState, action);
    console.log("newState: ", nextState);
    console.groupEnd();
    return nextState;
  };
};

export default logger;
