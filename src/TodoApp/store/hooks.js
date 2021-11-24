import { useContext } from "react";
import Context from "./Context";

export function UseStore() {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
}
