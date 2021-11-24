import React, { useState } from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import "./Todos.css";

export default function Todos() {
  const todos = useSelector((state) => state.todo);
  const [filter, setFilter] = useState("ALL");

  return (
    <div>
      {todos && todos.length ? (
        <div className="todoList-filter">
          <button onClick={() => setFilter("ALL")}>Show ALL</button>
          <button onClick={() => setFilter("DONE")}>Show DONE</button>
          <button onClick={() => setFilter("NOT DONE")}>Show NOT DONE</button>
        </div>
      ) : null}

      <div className="todoList">
        {todos && todos.length ? (
          filter === "ALL" ? (
            todos.map((todo) => <Todo todo={todo} key={todo.id} />)
          ) : filter === "NOT DONE" ? (
            todos
              .filter((todo) => todo.isDone === false)
              .map((todo) => <Todo todo={todo} key={todo.id} />)
          ) : filter === "DONE" ? (
            todos
              .filter((todo) => todo.isDone === true)
              .map((todo) => <Todo todo={todo} key={todo.id} />)
          ) : null
        ) : (
          <h2 className="todoList-oups">Oups! No ToDo to show :( </h2>
        )}
      </div>
    </div>
  );
}
