import { useSelector } from "react-redux";

import AddTodo from "./components/AddTodo/AddTodo";
import NavBar from "./components/NavBar/NavBar";
import Todo from "./components/Todo/Todo";
import "./App.css";

function App() {
  const store = useSelector((store) => store);
  return (
    <div className="App">
      <NavBar />
      <div className="App">
        <AddTodo />
        {/* <Todo /> */}
      </div>
    </div>
  );
}

export default App;
