import {RECEIVE_BEERS} from "../actions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_BEERS:
    return {
      ...state,
      data: action.data
    };
  default:
    return state;
  }
};

export default rootReducer;
