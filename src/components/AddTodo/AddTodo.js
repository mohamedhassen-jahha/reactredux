import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../store/actions/todoActions";

import "./AddTodo.css";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [state, setstate] = useState(0);

  return (
    <>
      <div className="addTodo">
        <input
          type="text"
          className="addTodo_input"
          placeholder="ADD YOUR TODO"
          onChange={(e) => setstate(e.target.value)}
        />
        <svg
          onClick={() => dispatch(addTodos(state))}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="plus-circle"
          className="svg-inline--fa fa-plus-circle fa-w-16 addTodo_svg"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
          ></path>
        </svg>
      </div>
    </>
  );
}
