import React from "react";
import {Card, CardTitle, CardText} from "material-ui/card";

const styles = {
  noBullets: {
    listStyleType: "none"
  },
  footerTitle: {
    color: "#e0e0e0"
  },
  whiteText: {
    color: "#9e9e9e"
  },
  containerStyle: {
    backgroundColor: "#424242"
  }
};

const Footer = () => (
  <div>
    <Card containerStyle={styles.containerStyle}>
      <CardTitle subtitle={<h1 style={styles.whiteText}>More Resources</h1>} />
      <CardText>
        <ul style={styles.noBullets}>
          <li style={styles.whiteText}>All data supplied by
            <a style={styles.whiteText} href="http://www.brewerydb.com/">BreweryDB</a>
          </li>
          <li style={styles.whiteText}><a style={styles.whiteText} href="/">Home</a></li>
          <li style={styles.whiteText}><a style={styles.whiteText} href="/about.html">About</a></li>
        </ul>
      </CardText>
    </Card>
  </div>
);

export default Footer;
