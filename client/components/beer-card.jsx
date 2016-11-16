import React from "react";
import {Card, CardActions, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Divider from "material-ui/Divider";
import beerIconImage from "../images/beer-icon-240.png";

const styles = {
  card: {
    width: "250px"
  }
};

export class BeerCard extends React.Component {
  render() {
    return (
      <Card style={styles.card}>
        <CardMedia>
          <img src={`/js/${beerIconImage}`} />
        </CardMedia>

        <CardText>
          Some data about beer
        </CardText>

        <Divider />

        <CardActions>
          <FlatButton label="LEARN MORE" />
        </CardActions>
      </Card>
    );
  }
}

export default BeerCard;
