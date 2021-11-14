import UseEffect from "./components/UseEffect";
import { useState } from "react"
function App() {
  const mounted = localStorage.getItem("mount")
  const [isMounted, setIsMounted] = useState(JSON.parse(mounted) ?? false)
  return (
    <>
      <button onClick={() => {  
        setIsMounted(!isMounted);
        localStorage.setItem("mount", !isMounted);
      }}>toggle</button>
      {isMounted && <UseEffect />}
    </>
  );
}

export default App;
