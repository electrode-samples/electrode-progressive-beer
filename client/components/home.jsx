import React, {PropTypes} from "react";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Card, CardMedia, CardTitle} from "material-ui/Card";
import TextField from "material-ui/TextField";
import SearchIcon from "material-ui/svg-icons/action/search";
import {AboveTheFoldOnlyServerRender} from "above-the-fold-only-server-render";
import Header from "./header";
import BeerList from "./beer-list";
import Footer from "./footer";
import beerMapImage from "../images/beer-map.png";

const styles = {
  root: {
    minHeight: "800px",
    textAlign: "-webkit-center"
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
  render() {
    return (
      <Home {...this.props}/>
    );
  }
}

HomeWrapper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

/* eslint-disable max-len */
export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    }
  }

  /* eslint react/no-did-mount-set-state: 0 */
  componentDidMount() {
    fetch(`/getBeerStyles?init_cards=${this.props.location.query.init_cards}`, {
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((resp) => {
      const {store} = this.context;

      resp.json().then(beerData => {
        store.dispatch({
          type: "ADD_BEER_STYLES",
          data: beerData.data
        });
      });
    })
    .catch((e) => {
      this.setState({beerStyles: `GET FAILED: ${e.toString()}`});
    });
  }

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
            <BeerList beers={this.props.data}/>
          </div>

          <AboveTheFoldOnlyServerRender skip={true}>
            <div>
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
          </AboveTheFoldOnlyServerRender>
        </div>
      </MuiThemeProvider>
    );
  }
}

Home.contextTypes = {
  store: React.PropTypes.object
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => ({
  data: state && state.data
});

export default connect(
  mapStateToProps
)(HomeWrapper);
