import "./App.css";
import MyContext from "./MyContext";
import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <MyContext.Provider value={{text, setText}}>
        <MyComponent />
      </MyContext.Provider>
    </>
  );
}

export default App;
