import React, {PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./header";
import Footer from "./footer";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  header: {
    fontSize: "40px",
    paddingTop: "40%",
    paddingBottom: "50px",
    textAlign: "center"
  },
  availableHeader: {
    fontSize: "40px",
    paddingTop: "5%",
    paddingBottom: "1%",
    textAlign: "center"
  },
  subText: {
    margin: "0 auto",
    fontSize: "20px",
    width: "90%",
    textAlign: "justify",
    lineHeight: "40px"
  }
};

/* eslint-disable max-len */
export class BeerStyle extends React.Component {
  render() {
    const beerStyleId = this.props.location.query.style;
    const {store} = this.context;
    const state = store.getState();

    const beerStyleDesc = [...state].map((beerStyle) => {
      if (beerStyle.id === beerStyleId) {
        return beerStyle.description;
      }
    });

    return (
      <MuiThemeProvider>
        <div>
          <Header />

          <h1 style={styles.header}>This Beer's Style</h1>
          <p style={styles.subText}>{beerStyleDesc}</p>

          {/* <h1 style={styles.availableHeader}>Available Beers</h1> */}
          <div style={styles.root}>
          </div>

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

BeerStyle.contextTypes = {
  store: React.PropTypes.object
};

BeerStyle.propTypes = {
  location: PropTypes.object
};

BeerStyle.defaultProps = {
  location: {}
};

export default BeerStyle;
