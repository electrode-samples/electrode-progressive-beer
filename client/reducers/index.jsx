const rootReducer = (state = {}, action) => {
  switch (action.type) {
  case "ADD_BEER_STYLES":
    return {
      ...state.data, data: action.data
    };
  default:
    return state;
  }
};

export default rootReducer;
