export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const REQUEST_BEERS = "REQUEST_BEERS";

export const receiveBeers = (json) => ({
  data: json.data,
  type: RECEIVE_BEERS
});

export const requestBeers = () => ({
  type: REQUEST_BEERS
});

export const fetchBeers = () => dispatch => {
  dispatch(requestBeers());

  return fetch(`/getBeerStyles`)
    .then(response => response.json())
    .then(json => dispatch(receiveBeers(json)));
};
