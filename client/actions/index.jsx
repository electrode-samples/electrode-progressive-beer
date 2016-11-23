export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const REQUEST_BEERS = "REQUEST_BEERS";

export const receiveBeers = (json) => ({
  data: json.data,
  type: RECEIVE_BEERS
});

export const requestBeers = () => ({
  type: REQUEST_BEERS
});

export const fetchBeers = (prefetchCards) => (dispatch) => {
  dispatch(requestBeers());

  return fetch(`/getBeerStyles?prefetch_cards=${prefetchCards}`)
    .then((res) => res.json())
    .then((json) => dispatch(receiveBeers(json)));
};
