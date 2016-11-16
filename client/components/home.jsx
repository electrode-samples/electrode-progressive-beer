import React, {PropTypes} from "react";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {GridList} from "material-ui/GridList";
import {Card, CardMedia, CardTitle} from "material-ui/card";
import TextField from "material-ui/TextField";
import SearchIcon from "material-ui/svg-icons/action/search";
import Header from "./header";
import BeerCard from "./beer-card";
import Footer from "./footer";
import beerMapImage from "../images/beer-map.png";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "800px",
    justifyContent: "space-around"
  },
  gridList: {
    width: "90%",
    minHeight: "800px"
  },
  header: {
    fontSize: "40px",
    paddingTop: "40%",
    paddingBottom: "50px",
    textAlign: "center"
  },
  subText: {
    margin: "0 auto",
    fontSize: "20px",
    width: "90%",
    textAlign: "justify",
    lineHeight: "40px"
  },
  search: {
    textAlign: "center",
    paddingBottom: "20px"
  },
  overlayContentStyle: {
    fontFamily: "'Gabriela', serif",
    textAlign: "center",
    height: "50%",
    backgroundColor: "rgba(0,0,0,0)"
  }
};

class HomeWrapper extends React.Component {
  constructor() {
    super();

    fetch("/getBeerStyles", {
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((resp) => {
      if (resp.status === 200) {
        this.setState({testResult: `GET SUCCEEDED with status ${resp.status}` });
        const beerStyles = JSON.parse(resp.body);
      } else {
        this.setState({testResult: `GET FAILED with status ${resp.status}` });
      }
    })
    .catch((e) => {
      this.setState({testResult: `GET FAILED: ${e.toString()}`});
    });
  }

  render() {
    return (
      <Home data={this.props.data}/>
    );
  }
}

HomeWrapper.propTypes = {
  data: PropTypes.string
};

/* eslint-disable max-len */
export class Home extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />

          <h1 style={styles.header}>Explore</h1>
          <p style={styles.subText}>There are so many great beers around the world. Sometimes it can be hard to keep track of all the different kinds! Progressive Beer is a handy web app that is designed to help you learn everything there is to know about beers! Explore the many beer styles in list below for more information.</p>

          <div style={styles.search}>
            <TextField floatingLabelText="Filter beer styles..." /> <SearchIcon />
          </div>

          <div style={styles.root}>
            <GridList style={styles.gridList} cols={3}>
              <BeerCard />
              <BeerCard />
              <BeerCard />
              <BeerCard />
            </GridList>
          </div>

          <Card>
            <CardMedia
              overlay={<CardTitle title="Beer from around the world!" />}
              overlayContentStyle={styles.overlayContentStyle}
            >
              <img src={`/js/${beerMapImage}`} />
            </CardMedia>
          </Card>
          <br />

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

Home.propTypes = {
  data: PropTypes.string
};

const mapStateToProps = (state) => ({
  data: state && state.data
});

export default connect(
  mapStateToProps
)(HomeWrapper);
