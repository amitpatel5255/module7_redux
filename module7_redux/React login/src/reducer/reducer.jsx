// src/reducer/reducer.jsx

const initialState = 0; // Define your initial state here

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case "inc":
          return state + 1;
      case "insert":
          return state + 1;
      case "dec":
          return state - 1;
      default:
          return state;
  }
}

export default reducer;
