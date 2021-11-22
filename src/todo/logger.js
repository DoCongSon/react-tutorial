const logger = reducer => {
    return (prevState, action) => {
        console.group(action.type);
        console.log("prevState: ", prevState);
        console.log("action: ", action);

        const newState = reducer(prevState, action);
        
        console.log("newState: ", newState);
        console.groupEnd()
        
        return newState
    }
}
6ff
export default logger;