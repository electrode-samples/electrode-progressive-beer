const rootReducer = (state = {}, action) => {
  switch (action.type) {
  case "ADD_BEER_STYLES":
    const newState = [...state.data].concat(action.data);
    state = newState;
    state.data = newState;
  }

  return state;
};

export default rootReducer;
