import React, {PropTypes} from "react";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./header";
import Footer from "./footer";

const styles = {
  header: {
    fontSize: "40px",
    paddingTop: "40%",
    paddingBottom: "50px",
    textAlign: "center"
  }
};

class BeerDetails extends React.Component {
  render() {
    const beerDesc = this.props.data;

    return (
      <MuiThemeProvider>
        <div>
          <Header image="beerdetails"/>

          <h1 style={styles.header}> Features </h1>

          {beerDesc}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

BeerDetails.propTypes = {
  data: PropTypes.object
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps
)(BeerDetails);
