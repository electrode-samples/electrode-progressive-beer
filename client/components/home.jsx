import React, {PropTypes} from "react";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {GridList} from "material-ui/GridList";
import {Card, CardMedia, CardTitle} from "material-ui/card";
import TextField from "material-ui/TextField";
import SearchIcon from "material-ui/svg-icons/action/search";
import Header from "./header";
import BeerCard from "./beercard";
import Footer from "./footer";
import WorldImg from "../images/beer-map.png";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: "auto"
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
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0)"
  }
};

class HomeWrapper extends React.Component {
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

          <h1 style={styles.header}> Explore </h1>
          <p style={styles.subText}> There are so many great beers around the world. Sometimes it can be hard to keep track of all the different kinds! Progressive Beer is a handy web app that is designed to help you learn everything there is to know about beers! Explore the many beer styles in list below for more information. </p>

          <div style={styles.search}>
            <TextField floatingLabelText="Filter beer styles..." /> <SearchIcon />
          </div>

          <div style={styles.root}>
            <GridList cellHeight={180} style={styles.gridList}>
              <BeerCard />
            </GridList>
          </div>

          <Card>
            <CardMedia
              overlay={<CardTitle title="Beer from around the world!" />}
              overlayContentStyle={styles.overlayContentStyle}
            >
              <img src={WorldImg} />
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
