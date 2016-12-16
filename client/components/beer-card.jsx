import React, {PropTypes} from "react";
import {Card, CardActions, CardMedia, CardText} from "material-ui/Card";
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Forward from 'material-ui/svg-icons/content/forward';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FlatButton from "material-ui/FlatButton";
import Divider from "material-ui/Divider";
import lightBeerImage from "../images/srm/light.jpg";
import amberBeerImage from "../images/srm/amber.jpg";
import darkBeerImage from "../images/srm/dark.jpg";

const srmThresholdMin = 10;
const srmThresholdMax = 10;

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
        title={this.props.beer.name}
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
