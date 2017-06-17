import React, {PropTypes} from "react";

import AppBar from "material-ui/AppBar";
import {Card, CardMedia, CardTitle} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import homeImage from "../images/beer.jpg";
import aboutImage from "../images/about.jpg";
import beerStyleImage from "../images/styles.jpg";
import beerDetailsImage from "../images/beer-page.jpg";

// eslint-disable-next-line
let styles = {
  overlayContentStyle: {
    textAlign: "center",
    height: "50%",
    backgroundColor: "rgba(0,0,0,0)"
  },
  appBarStyle: {
    fontFamily: "'Gabriela', serif",
    backgroundColor: "rgba(0,0,0,0)"
  },
  appText: {
    fontFamily: "'Gabriela', serif",
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "5px"
  },
  titleStyle: {
    fontSize: "300%",
    paddingBottom: "3%",
    lineHeight: "55px"
  },
  subtitleStyle: {
    color: "#FFFFFF",
    fontSize: "135%",
    fontStyle: "italic"
  },
  img: {
    width: "100%",
    height: "400px",
    objectFit: "cover"
  },
  BeerImgCard: {
    fontFamily: "'Gabriela', serif",
    position: "absolute",
    top: "0",
    width: "99.2%"
  }
};

export class Header extends React.Component {
  render() {
    styles.titleStyle.fontSize = this.props.phone ? "300%" : "460%";

    let beerImage = homeImage;
    if (this.props.image === "about") {
      beerImage = aboutImage;
    } else if (this.props.image === "beerstyle") {
      beerImage = beerStyleImage;
    } else if (this.props.image === "beerdetails") {
      beerImage = beerDetailsImage;
    }

    return (
      <div>
        <AppBar
          title={<a style={styles.appText} href="/">Progressive Beer</a>}
          style={styles.appBarStyle}
          showMenuIconButton={false}
          iconElementRight={<FlatButton label="About" href="/about" />}
        />

        <Card style={styles.BeerImgCard}>
          <CardMedia
            overlay={
              <CardTitle
                title={this.props.title}
                titleStyle={styles.titleStyle}
                subtitle={this.props.subtitle}
                subtitleStyle={styles.subtitleStyle}
              />
            }
            overlayContentStyle={styles.overlayContentStyle}
          >
            <img style={styles.img} src={beerImage} alt="beer background" />
          </CardMedia>
        </Card>
      </div>
    );
  }
}

Header.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  phone: PropTypes.bool
};

Header.defaultProps = {
  image: "home"
};

export default Header;
