let initialState = {
  todo: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // DEFAULT REDUCER RETURN
    default:
      return state;

    // REDUCER CASE LOG
    //--------------------//
    //ADD NEW TODO
    case "ADD_TODO":
      // return ({ ...state, todo: { ...state.todo, payload } };
      //ADD NEW TODO
      return payload.todo === ""
        ? null
        : { ...state, todo: [...state.todo, { ...payload }] };

    //--------------------//
    //CHANGE TODO INNER
    case "CHANGE_STATE_TODO":
      return {
        ...state,
        todo: [
          ...state.todo.map((todo) =>
            todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
          ),
        ],
      };

    //--------------------//
    //DELETE TODO INNER
    case "DELETE_TODO":
      return {
        ...state,
        todo: [...state.todo.filter((todo) => todo.id !== payload.id)],
      };

    //--------------------//
    //CHANGE TODO INNER
    case "CHANGE_TODO":
      return {
        ...state,
        todo: [
          ...state.todo.map((todo) =>
            todo.id === payload.id
              ? { ...todo, todo: payload.todoInnerChange }
              : todo
          ),
        ],
      };
  }
};
