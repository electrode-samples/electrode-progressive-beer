import React, {PropTypes} from "react";

import {AboveTheFoldOnlyServerRender} from "above-the-fold-only-server-render";
import {GridList} from "material-ui/GridList";

import BeerCard from "./beer-card";

const ABOVE_THE_FOLD_MIN = 0;
const ABOVE_THE_FOLD_MAX = 300;

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    margin: "auto",
    paddingLeft: "5%",
    justifyContent: "space-around"
  }
};

export class BeerList extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        {this.renderBeerCards(ABOVE_THE_FOLD_MIN, ABOVE_THE_FOLD_MAX)}
        <br />
        <AboveTheFoldOnlyServerRender>
          {this.renderBeerCards(ABOVE_THE_FOLD_MAX)}
        </AboveTheFoldOnlyServerRender>
        <br />
      </div>
    );
  }

  renderBeerCards(start, end) {
    const beerCards = this.props.beers.slice(start, end).map((beer, i) =>
      <BeerCard key={i} beer={beer} from={this.props.from}/>);

    return (
      <GridList cols='auto' cellHeight='auto' padding={30}>
        {beerCards}
      </GridList>
    );
  }
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  from: PropTypes.string,
  phone: PropTypes.bool
};

BeerList.defaultProps = {
  beers: []
};

export default BeerList;
