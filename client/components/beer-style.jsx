import React, {PropTypes} from "react";
import {connect} from "react-redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import BeerList from "./beer-list";
import Header from "./header";
import Footer from "./footer";

const styles = {
  root: {
    minHeight: "800px",
    textAlign: "-webkit-center"
  },
  header: {
    fontSize: "40px",
    paddingTop: "360px",
    paddingBottom: "3%",
    textAlign: "center"
  },
  availableHeader: {
    fontSize: "40px",
    paddingTop: "2%",
    paddingBottom: "1%",
    textAlign: "center"
  },
  subText: {
    margin: "0 auto",
    fontSize: "20px",
    width: "90%",
    textAlign: "justify",
    lineHeight: "40px",
    paddingBottom: "2%"
  }
};

class BeerStyle extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header
            image="beerstyle"
            title={this.props.data.name}
            subtitle=""
            phone={this.props.phone}
          />

          <h1 style={styles.header}>This Beer's Style</h1>
          <p style={styles.subText}>{this.props.data.description}</p>

          <h1 style={styles.availableHeader}>Available Beers</h1>

          <div style={styles.root}>
            <BeerList beers={this.props.data.beers} from="styles" phone={this.props.phone}/>
          </div>

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

BeerStyle.propTypes = {
  data: PropTypes.object,
  phone: PropTypes.bool,
  location: PropTypes.object
};

const mapStateToProps = (state) => ({
  data: state.data,
  phone: state.phone
});

export default connect(
  mapStateToProps
)(BeerStyle);
