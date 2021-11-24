import React, { useState } from "react";
import {
  changeTodo,
  deleteTodo,
  isdoneTodo,
} from "../../store/actions/todoActions";
import "./Todo.css";
import { useDispatch } from "react-redux";

export default function Todo(props) {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const [todoInnerChange, setTodoInnerChange] = useState("");

  const todoInnerTextChangeHandler = () => {
    dispatch(changeTodo(props.todo.id, todoInnerChange));
    setChange(false);
  };
  return (
    <div className="todoMain">
      {change ? (
        <input
          className="todoMain-todo-input"
          onChange={(e) => setTodoInnerChange(e.target.value)}
          placeholder={props.todo.todo}
          defaultValue={props.todo.todo}
        />
      ) : (
        <h2 className={`todoMain-todo ${props.todo.isDone ? "isDone" : null}`}>
          {props.todo.todo}
        </h2>
      )}

      <div className="todoMain-SVG">
        {change ? (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="save"
            className="svg-inline--fa fa-save fa-w-14 SVG-change"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() => todoInnerTextChangeHandler()}
          >
            <path
              fill="currentColor"
              d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"
            ></path>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="pen"
            className="svg-inline--fa fa-pen fa-w-16 SVG-change"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => setChange(true)}
          >
            <path
              fill="currentColor"
              d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
            ></path>
          </svg>
        )}

        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="trash"
          className="svg-inline--fa fa-trash fa-w-14 SVG-delete"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={() => dispatch(deleteTodo(props.todo.id))}
        >
          <path
            fill="currentColor"
            d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
          ></path>
        </svg>
        {props.todo.isDone ? (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="check-circle"
            className="svg-inline--fa fa-check-circle fa-w-16 SVG-done"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => dispatch(isdoneTodo(props.todo.id))}
          >
            <path
              fill="currentColor"
              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
            ></path>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle"
            className="svg-inline--fa fa-circle fa-w-16 SVG-Notdone"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => dispatch(isdoneTodo(props.todo.id))}
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
}
