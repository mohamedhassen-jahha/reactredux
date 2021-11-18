import { ADD_TODO } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const addTodos = (todoInner) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuidv4(),
      isDone: false,
      toDo: todoInner,
      createDate: Date(),
    },
  };
};
