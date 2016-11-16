import React from "react";
import {Card, CardActions, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Divider from "material-ui/Divider";
import beerIconImage from "../images/beer-icon-240.png";

export class BeerCard extends React.Component {
  render() {
    return (
      <Card>
        <CardMedia>
          <img src={`/js/${beerIconImgSrc}`} />
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
