import { useState } from "react"
// mặc đỊnh nếu không trỏ đên file js nào thì nó sẽ tủ động tìm đến index.js như sau:
import Context from "./useContext";

function App() {
  const mounted = localStorage.getItem("mount")
  const [isMounted, setIsMounted] = useState(JSON.parse(mounted) ?? false)
  return (
    <div style = {{margin: "20px"}}>
      <button onClick={() => {  
        setIsMounted(!isMounted);
        localStorage.setItem("mount", !isMounted);
      }}>toggle</button>
      {isMounted && <Context />}
    </div>
  );
}

export default App;
