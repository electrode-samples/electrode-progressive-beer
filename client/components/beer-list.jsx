import React, {PropTypes} from "react";
import {AboveTheFoldOnlyServerRender} from "above-the-fold-only-server-render";
import {GridList} from "material-ui/GridList";
import BeerCard from "./beer-card";

const NUM_ABOVE_THE_FOLD = 6;
const styles = {
  gridList: {
    minHeight: "800px",
    width: "90%"
  }
};

export class BeerList extends React.Component {
  render() {
    return (
      <GridList style={styles.gridList} cols={3}>
        {this.renderBeerCards(0, NUM_ABOVE_THE_FOLD)}

        <AboveTheFoldOnlyServerRender skip={true}>
          <div>
            {this.renderBeerCards(NUM_ABOVE_THE_FOLD)}
          </div>
        </AboveTheFoldOnlyServerRender>
      </GridList>
    );
  }

  renderBeerCards(start, end) {
    return this.props.beers.slice(start, end).map((beer, i) => <BeerCard key={i} />);
  }
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object)
};

BeerList.defaultProps = {
  beers: []
};

export default BeerList;
