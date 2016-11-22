import React, {PropTypes} from "react";
import {Card, CardActions, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Divider from "material-ui/Divider";
import lightBeerImage from "../images/srm/light.jpg";
import amberBeerImage from "../images/srm/amber.jpg";
import darkBeerImage from "../images/srm/dark.jpg";

const styles = {
  card: {
    width: "250px",
    height: "240px"
  }
};

/*eslint brace-style: 0*/
export class BeerCard extends React.Component {
  render() {
    let beerImage = lightBeerImage;
    if (this.props.beer.srmMax > 10 && this.props.beer.srmMax < 20) {
      beerImage = amberBeerImage;
    }
    else if (this.props.beer.srmMax > 20) {
      beerImage = darkBeerImage;
    }

    return (
      <Card style={styles.card}>
        <CardMedia>
          <img src={beerImage} alt="Beer Icon" />
        </CardMedia>

        <CardText>
          {this.props.beer.name}
        </CardText>

        <Divider />

        <CardActions>
          <FlatButton label="LEARN MORE" href={`/beerstyle?style=${this.props.beer.id}`}/>
        </CardActions>
      </Card>
    );
  }
}


BeerCard.propTypes = {
  beer: PropTypes.object
};

BeerCard.defaultProps = {
  beer: {}
};

export default BeerCard;
