import React, {PropTypes} from "react";
import {Card, CardActions, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Divider from "material-ui/Divider";
import lightBeerImage from "../images/srm/light.jpg";
import amberBeerImage from "../images/srm/amber.jpg";
import darkBeerImage from "../images/srm/dark.jpg";

const srmThresholdMin = 10;
const srmThresholdMax = 10;
const styles = {
  learnButton: {
    position: "absolute",
    bottom: "0"
  }
};

/*eslint brace-style: 0*/
export class BeerCard extends React.Component {
  constructor() {
    super();

    //eslint-disable-next-line
    this.state = {styles:{card:{width:"250px",height:"240px",position:"relative"}}};
    //this.updateDimensions = this.updateDimensions.bind(this);
  }
  // updateDimensions() {
  //   const documentElement = document.documentElement;
  //   const body = document.getElementsByTagName("body")[0];
  //   const width = window.innerWidth || documentElement.clientWidth || body.clientWidth;
  //
  //   /*eslint-disable */
  //   if(width <= 375) {
  //     this.setState({styles:{card:{width:"110px",height:"210px",position:"relative"}}});
  //   } else if(width > 375 && width < 850) {
  //     this.setState({styles:{card:{width:"175px",height:"215px",position:"relative"}}});
  //   } else {
  //     this.setState({styles:{card:{width:"250px",height:"240px",position:"relative"}}});
  //   }
  //   /*eslint-enable */
  // }
  // componentWillMount() {
  //   this.updateDimensions();
  // }
  // componentDidMount() {
  //   window.addEventListener("resize", this.updateDimensions);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions);
  // }
  render() {
    let beerImage = lightBeerImage;

    if (this.props.beer.srmMax > srmThresholdMin && this.props.beer.srmMax < srmThresholdMax) {
      beerImage = amberBeerImage;
    }
    else if (this.props.beer.srmMax > srmThresholdMax) {
      beerImage = darkBeerImage;
    }

    let routeUrl = `/beerstyle?style=${this.props.beer.id}`;
    if (this.props.from === "styles") {
      routeUrl = `/beerdetails?style=${this.props.beer.styleId}&beer=${this.props.beer.id}`;
    }

    return (
      <Card style={this.state.styles.card}>
        <CardMedia>
          <img src={beerImage} alt="Beer Icon" />
        </CardMedia>

        <CardText>
          {this.props.beer.name}
        </CardText>

        <Divider />

        <CardActions style={styles.learnButton}>
          <FlatButton label="LEARN MORE" href={routeUrl}/>
        </CardActions>
      </Card>
    );
  }
}

BeerCard.propTypes = {
  beer: PropTypes.object,
  from: PropTypes.string
};

BeerCard.defaultProps = {
  beer: {}
};

export default BeerCard;
