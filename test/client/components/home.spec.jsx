import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "../../../client/reducers";
import {Home} from "client/components/home";
import thunk from "redux-thunk";

const DEFAULT_BEER_CARDS = 3;

describe("Home", () => {
  let component;
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("has expected content with deep render", () => {
    const data = {
      "message": "Request Successful",
      "data": [{
        "id": 170,
        "categoryId": 11,
        "category": {
          "id": 11,
          "createDate": "2012-03-21 20:06:46"
        },
        "name": "Wild Beer",
        "shortName": "Wild Beer",
        "description": "Wild Beers",
        "createDate": "2015-04-07 17:21:44"
      }],
      "status": "success"
    };
    const initialState = {data};
    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
    );
    /*eslint-disable*/
    const location = {query: {prefetch_cards: DEFAULT_BEER_CARDS}};
    /*eslint-enable*/

    component = ReactDOM.render(
      <Home
        store={store}
        data={data.data}
        location={location}
      />,
      container
    );

    expect(component).to.not.be.false;
  });
});
