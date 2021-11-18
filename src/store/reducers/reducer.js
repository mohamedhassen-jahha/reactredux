let initialState = {
  todo: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      // return ({ ...state, todo: { ...state.todo, payload } };
      return { ...state, todo: [...state.todo, { ...payload }] };

    default:
      return state;
  }
};
