import React, {PropTypes} from "react";
import {connect} from "react-redux";
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

class BeerStyle extends React.Component {
  render() {
    const beerStyleDesc = this.props.data.description;

    return (
      <MuiThemeProvider>
        <div>
          <Header />

          <h1 style={styles.header}>This Beer's Style</h1>
          <p style={styles.subText}>{beerStyleDesc}</p>

          <h1 style={styles.availableHeader}></h1>
          <div style={styles.root}>
          </div>

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

BeerStyle.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps
)(BeerStyle);
