import React, {PropTypes} from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import {Card, CardMedia, CardTitle} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import homeImage from "../images/beer.jpg";
import aboutImage from "../images/about.jpg";
import beerStyleImage from "../images/styles.jpg";
import beerDetailsImage from "../images/beer-page.jpg";
import beerIcon from "../images/beer-icon.svg";

const styles = {
  overlayContentStyle: {
    textAlign: "center",
    height: "50%",
    backgroundColor: "rgba(0,0,0,0)"
  },
  appBarStyle: {
    fontFamily: "'Gabriela', serif",
    backgroundColor: "rgba(0,0,0,0)"
  },
  titleText: {
    fontFamily: "'Gabriela', serif",
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "5px"
  },
  BeerImgCard: {
    fontFamily: "'Gabriela', serif",
    position: "absolute",
    top: "0",
    width: "99%"
  }
};

export class Header extends React.Component {
  render() {
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
          title={<a style={styles.titleText} href="/">Progressive Beer</a>}
          style={styles.appBarStyle}
          iconElementLeft={<IconButton><beerIcon /></IconButton>}
          iconElementRight={<FlatButton label="About" href="/about" />}
        />

        <Card style={styles.BeerImgCard}>
          <CardMedia
            overlay={<CardTitle title={this.props.title} subtitle={this.props.subtitle}/>}
            overlayContentStyle={styles.overlayContentStyle}
          >
            <img src={beerImage} alt="beer background" />
          </CardMedia>
        </Card>
      </div>
    );
  }
}

Header.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Header.defaultProps = {
  image: "home"
};

export default Header;
