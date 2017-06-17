import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {createFilter} from "react-search-input";
import {AboveTheFoldOnlyServerRender} from "above-the-fold-only-server-render";

import SearchIcon from "material-ui/svg-icons/action/search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Card, CardMedia, CardTitle} from "material-ui/Card";
import TextField from "material-ui/TextField";

import Header from "./header";
import BeerList from "./beer-list";
import Footer from "./footer";
import beerMapImage from "../images/beer-map.png";
import {fetchBeers} from "../actions";

const KEYS_TO_FILTERS = ["name"];
const styles = {
  beerList: {
    minHeight: "800px",
    textAlign: "-webkit-center"
  },
  header: {
    fontSize: "40px",
    paddingTop: "360px",
    paddingBottom: "3%",
    textAlign: "center"
  },
  subText: {
    margin: "0 auto",
    fontSize: "20px",
    width: "90%",
    textAlign: "justify",
    lineHeight: "40px",
    paddingBottom: "2%"
  },
  search: {
    textAlign: "center",
    paddingBottom: "3%"
  },
  overlayContentStyle: {
    fontFamily: "'Gabriela', serif",
    textAlign: "center",
    height: "50%",
    backgroundColor: "rgba(0,0,0,0)"
  }
};

/*eslint no-class-assign: 0*/
/*eslint react/no-did-mount-set-state: 0*/
export class Home extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {searchTerm: ""};
    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
  }
  componentDidMount() {
    const {dispatch, location} = this.props;

    dispatch(fetchBeers(location.query.prefetch_cards));
  }
  handleSearchUpdate(term) {
    this.setState({searchTerm: term.target.value});
  }
  render() {
    const filteredStyles = this.props.data.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <MuiThemeProvider>
        <div>
          <Header
            image="header"
            title="Progressive Beer"
            subtitle="Life, Liberty, and the Pursuit of Beer"
            phone={this.props.phone}
          />

          <h1 style={styles.header}>Explore</h1>
          <p style={styles.subText}>There are so many great beers around the world.
            Sometimes it can be hard to keep track of all the different kinds!
            Progressive Beer is a handy web app that is designed to help you learn
            everything there is to know about beers! Explore the many beer styles in
            list below for more information.</p>

          <div style={styles.search}>
            <TextField
              className="search-input"
              floatingLabelText="Filter Beer Styles"
              value={this.state.searchTerm}
              onChange={this.handleSearchUpdate}
            />
            <SearchIcon/>
          </div>

          <div style={styles.beerList}>
            <BeerList beers={filteredStyles} phone={this.props.phone}/>
          </div>

          <AboveTheFoldOnlyServerRender skip={true}>
            <div>
              <Card>
                <CardMedia
                  overlay={<CardTitle title="Beer from around the world!" />}
                  overlayContentStyle={styles.overlayContentStyle}
                >
                  <img src={beerMapImage} alt="Beer Map" />
                </CardMedia>
              </Card>
              <br />

              <Footer />
            </div>
          </AboveTheFoldOnlyServerRender>
        </div>
      </MuiThemeProvider>
    );
  }
}

// Adds dispatch to props
Home = connect()(Home);

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  phone: PropTypes.bool,
  location: PropTypes.object,
  dispatch: PropTypes.func
};

class HomeWrapper extends React.Component {
  render() {
    return (
      <Home {...this.props} />
    );
  }
}

HomeWrapper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  phone: PropTypes.bool
};

const mapStateToProps = (state) => ({
  data: state && state.data,
  phone: state.phone
});

export default connect(
  mapStateToProps
)(HomeWrapper);
