import React, {PropTypes} from "react";
import {GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Forward from "material-ui/svg-icons/content/forward";
import lightBeerImage from "../images/srm/light.jpg";
import amberBeerImage from "../images/srm/amber.jpg";
import darkBeerImage from "../images/srm/dark.jpg";

const srmThresholdMin = 10;
const srmThresholdMax = 10;

const styles = {
  title: {
    textDecoration: "none",
    color: "#FFFFFF"
  }
};

/*eslint brace-style: 0*/
export class BeerCard extends React.Component {
  render() {
    let beerImage = lightBeerImage;

    if (this.props.beer.srmMax > srmThresholdMin && this.props.beer.srmMax < srmThresholdMax) {
      beerImage = amberBeerImage;
    }
    else if (this.props.beer.srmMax > srmThresholdMax) {
      beerImage = darkBeerImage;
    }

    let routeUrl = `/beerstyle?style=${this.props.beer.id}`;
    if (this.props.from === "styles") {
      routeUrl = `/beerdetails?style=${this.props.beer.styleId}&beer=${this.props.beer.id}`;
    }

    return (
      <GridTile
        key={beerImage}
        title={<a style={styles.title} href={routeUrl}>{this.props.beer.name}</a>}
        actionIcon={<IconButton href={routeUrl}><Forward color="white" /></IconButton>}
      >
        <img src={beerImage} />
      </GridTile>
    );
  }
}

BeerCard.propTypes = {
  beer: PropTypes.object,
  from: PropTypes.string
};

BeerCard.defaultProps = {
  beer: {}
};

export default BeerCard;
