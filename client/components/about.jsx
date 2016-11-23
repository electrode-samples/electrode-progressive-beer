import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Card, CardMedia, CardTitle} from "material-ui/Card";
import Header from "./header";
import Footer from "./footer";
import beerMapImage from "../images/beer-map.png";
import brewerydbImage from "../images/brewerydb-logo.png";

const styles = {
  titleHeader: {
    fontSize: "40px",
    paddingTop: "40%",
    paddingBottom: "5%",
    textAlign: "center"
  },
  dataHeader: {
    fontSize: "40px",
    paddingTop: "5%",
    paddingBottom: "1%",
    textAlign: "center"
  },
  subText: {
    margin: "0 auto",
    fontSize: "20px",
    width: "700px",
    textAlign: "justify",
    lineHeight: "40px",
    paddingBottom: "30px"
  },
  overlayContentStyle: {
    fontFamily: "'Gabriela', serif",
    textAlign: "center",
    height: "50%",
    backgroundColor: "rgba(0,0,0,0)"
  },
  link: {
    textAlign: "center"
  },
  breweryDb: {
    width: "150px",
    height: "150px"
  }
};

/* eslint-disable max-len */
const About = () => (
  <MuiThemeProvider>
    <div>
      <Header image="about" />

      <h1 style={styles.titleHeader}> About </h1>
      <p style={styles.subText}> Progressive Beer is a web app that is designed to leverage all the great features of Service Workers and build a truly Progressive Web App. If you'd like to learn more about Progressive Web Apps, I recommend checking out <p style={styles.link}><a href="https://developers.google.com/web/progressive-web-apps/">this link</a></p> for more information. Oh, and once you've visited a web page on this site, it will be available offline! </p>

      <Card>
        <CardMedia
          overlay={<CardTitle title="Beer from around the world!" />}
          overlayContentStyle={styles.overlayContentStyle}
        >
          <img src={beerMapImage} alt="Beer Map" />
        </CardMedia>
      </Card>

      <h1 style={styles.dataHeader}> Our Data </h1>
      <p style={styles.link}><img style={styles.breweryDb} src={`/js/${brewerydbImage}`} /></p>
      <p style={styles.subText}> All of our data is supplied by the team over at BreweryDb.com. If you'd like to learn more about them, please check out their website for a huge database of breweries, beers, beer events and even brewers guilds! You can even submit new beers as the database is constantly kept up to date. </p>

      <Footer />
    </div>
  </MuiThemeProvider>
);

export default About;
