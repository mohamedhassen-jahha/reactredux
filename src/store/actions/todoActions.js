import {
  ADD_TODO,
  CHANGE_STATE_TODO,
  DELETE_TODO,
  CHANGE_TODO,
} from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

//--------------------//
//ADD NEW TODO FN
export const addTodos = (todoInner) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuidv4(),
      isDone: false,
      todo: todoInner,
      createDate: Date(),
    },
  };
};

//--------------------//
//CHANGE STATE TODO FN
export const isdoneTodo = (id, isDone, todo) => {
  return {
    type: CHANGE_STATE_TODO,
    payload: {
      id,
      isDone,
      todo,
    },
  };
};

//--------------------//
//DELETE TODO FN
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

//--------------------//
//CHANGE TODO TEXT FN
export const changeTodo = (id, todoInnerChange) => {
  return {
    type: CHANGE_TODO,
    payload: {
      id,
      todoInnerChange,
    },
  };
};
