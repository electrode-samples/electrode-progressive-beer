import React from "react";
import {Card, CardActions, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Divider from "material-ui/Divider";
import lightBeerImage from "../images/srm/light.jpg";
import amberBeerImage from "../images/srm/amber.jpg";
import darkBeerImage from "../images/srm/dark.jpg";

let beerImage = lightBeerImage;
const styles = {
  card: {
    width: "250px",
    height: "240px"
  }
};

export class BeerCard extends React.Component {
  render() {
    if (this.props.beer.srmMax > 10 && this.props.beer.srmMax < 20) {
      beerImage = amberBeerImage;
    }
    else if (this.props.beer.srmMax > 20) {
      beerImage = darkBeerImage;
    }

    return (
      <Card style={styles.card}>
        <CardMedia>
          <img src={`/js/${beerImage}`} />
        </CardMedia>

        <CardText>
          {this.props.beer.name}
        </CardText>

        <Divider />

        <CardActions>
          <FlatButton label="LEARN MORE" href="/beer-style"/>
        </CardActions>
      </Card>
    );
  }
}

export default BeerCard;
