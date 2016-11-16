import React from "react";
import {Card, CardMedia, CardTitle, CardText} from "material-ui/card";
import beerMapImage from "../images/beer-map.png";

const overlayContentStyle = {
  textAlign: "center",
  backgroundColor: "rgba(0,0,0,0)"
};

const Footer = () => (
  <div>
    <Card>
      <CardMedia
        overlay={<CardTitle title="Beer from around the world!" />}
        overlayContentStyle={overlayContentStyle}
      >
        <img src={`/js/${beerMapImage}`} />
      </CardMedia>
    </Card>

    <br />

    <Card>
      <CardTitle subtitle="More Resources" />
      <CardText>
        <ul>
          <li>All data supplied by <a href="http://www.brewerydb.com/">BreweryDB</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </CardText>
    </Card>
  </div>
);

export default Footer;
