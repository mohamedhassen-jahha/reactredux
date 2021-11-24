import AddTodo from "./components/AddTodo/AddTodo";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Todos from "./components/TodoList/Todos";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
