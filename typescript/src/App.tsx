import "./App.css";
import { Countries } from "./enums";
import Person from "./Person";
import { UserProvider } from "./UserContextProvider";

function App() {
  return (
    <UserProvider>
      <Person Name={"Ibrahim"} Age={26} Married={false} country={Countries.Pakistan}/>
    </ UserProvider>
  );
}

export default App;
