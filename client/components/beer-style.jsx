import React, {PropTypes} from "react";
import {connect} from "react-redux";
import BeerList from "./beer-list";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./header";
import Footer from "./footer";

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
          <Header
            image="beerstyle"
            title={this.props.data.name}
            subtitle=""
          />

          <h1 style={styles.header}>This Beer's Style</h1>
          <p style={styles.subText}>{beerStyleDesc}</p>

          <h1 style={styles.availableHeader}>Available Beers</h1>

          <div style={styles.root}>
            <BeerList beers={this.props.data.beers} from="styles"/>
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
