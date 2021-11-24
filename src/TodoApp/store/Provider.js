import { useReducer } from "react";
import Context from "./Context";
import logger from "./logger";
import reducer, { innitState } from "./reducer";

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), innitState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
