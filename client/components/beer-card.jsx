import React, {PropTypes} from "react";

import {Card, CardActions, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import lightBeerImage from "../images/srm/light.jpg";
import amberBeerImage from "../images/srm/amber.jpg";
import darkBeerImage from "../images/srm/dark.jpg";

const srmThresholdMin = 10;
const srmThresholdMax = 20;

const styles = {
  card: {
     width: "75%",
     height: "100%"
   }
};

/*eslint brace-style: 0*/
export class BeerCard extends React.Component {
  render() {
    const beerSrmMax = this.props.beer.srmMax
      ? this.props.beer.srmMax
      : this.props.beer.style && this.props.beer.style.srmMax;
    let beerImage = lightBeerImage;

    if (beerSrmMax > srmThresholdMin && beerSrmMax < srmThresholdMax) {
      beerImage = amberBeerImage;
    } else if (beerSrmMax > srmThresholdMax) {
      beerImage = darkBeerImage;
    }

    let routeUrl = `/beerstyle?style=${this.props.beer.id}`;
    if (this.props.from === "styles") {
      routeUrl = `/beerdetails?style=${this.props.beer.styleId}&beer=${this.props.beer.id}`;
    }

    return (
      <Card style={styles.card} key={beerImage}>
       <CardMedia>
         <img src={beerImage} />
       </CardMedia>
       <CardText>
         {this.props.beer.name}
       </CardText>
       <CardActions>
         <FlatButton label="LEARN MORE" href={routeUrl}/>
       </CardActions>
     </Card>
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
