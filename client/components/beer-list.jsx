import React, {PropTypes} from "react";
import {AboveTheFoldOnlyServerRender} from "above-the-fold-only-server-render";
import {GridList} from "material-ui/GridList";
import BeerCard from "./beer-card";

const NUM_ABOVE_THE_FOLD = 6;
const styles = {
  gridList: {
    width: "95%"
  }
};

export class BeerList extends React.Component {
  render() {
    return (
      <div>
        {this.renderBeerCards(0, NUM_ABOVE_THE_FOLD)}

        <AboveTheFoldOnlyServerRender>
          {this.renderBeerCards(NUM_ABOVE_THE_FOLD)}
        </AboveTheFoldOnlyServerRender>
      </div>
    );
  }

  renderBeerCards(start, end) {
    const beerCards = this.props.beers.slice(start, end).map((beer, i) =>
      <BeerCard key={i} beer={beer} />);

    return (
      <GridList cellHeight={300} style={styles.gridList} cols={3}>
        {beerCards}
      </GridList>
    );
  }
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object)
};

BeerList.defaultProps = {
  beers: []
};

export default BeerList;
