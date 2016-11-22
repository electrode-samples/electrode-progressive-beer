import React from "react";
import {Card, CardTitle, CardText} from "material-ui/Card";

const styles = {
  noBullets: {
    listStyleType: "none"
  },
  cardTitle: {
    fontFamily: "'Gabriela', serif",
    paddingLeft: "2%",
    color: "#e0e0e0"
  },
  whiteText: {
    fontFamily: "'Gabriela', serif",
    color: "#9e9e9e"
  },
  brewerydb: {
    fontFamily: "'Gabriela', serif",
    color: "#9e9e9e",
    paddingLeft: "2px"
  },
  containerStyle: {
    backgroundColor: "#424242"
  }
};

const Footer = () => (
  <div>
    <Card containerStyle={styles.containerStyle}>
      <CardTitle subtitle={<h1 style={styles.cardTitle}>More Resources</h1>} />
      <CardText>
        <ul style={styles.noBullets}>
          <li style={styles.whiteText}>All data supplied by
            <a style={styles.brewerydb} href="http://www.brewerydb.com/">BreweryDB</a>
          </li>
          <li style={styles.whiteText}><a style={styles.whiteText} href="/">Home</a></li>
          <li style={styles.whiteText}><a style={styles.whiteText} href="/about">About</a></li>
        </ul>
      </CardText>
    </Card>
  </div>
);

export default Footer;
