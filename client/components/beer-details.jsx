import React, {PropTypes} from "react";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import Header from "./header";
import Footer from "./footer";

const styles = {
  header: {
    fontSize: "40px",
    paddingTop: "40%",
    paddingBottom: "5%",
    textAlign: "center"
  },
  secondaryHeaders: {
    fontSize: "30px",
    paddingTop: "2%",
    paddingBottom: "2%",
    textAlign: "center"
  },
  subText: {
    margin: "0 auto",
    fontSize: "20px",
    width: "90%",
    textAlign: "justify",
    lineHeight: "40px",
    paddingBottom: "5%"
  },
  detailsText: {
    textAlign: "center",
    margin: "0 auto",
    fontSize: "20px",
    width: "90%",
    lineHeight: "40px"
  },
  stylesButton: {
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    paddingTop: "10%",
    paddingBottom: "10%"
  }
};

/* eslint-disable max-len */
export class BeerDetails extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header
            image="beerdetails"
            title={this.props.data.name}
            subtitle={this.props.data.style.name}
          />

          <h1 style={styles.header}>Features</h1>
          <p style={styles.subText}>{this.props.data.description}</p>

          <h1 style={styles.secondaryHeaders}>Details</h1>
          <p style={styles.detailsText}>International Bitterness Units scale: {this.props.data.ibu}</p>
          <p style={styles.detailsText}>Alcohol by Volume: {this.props.data.style.abvMin} to {this.props.data.style.abvMax}</p>
          <p style={styles.detailsText}>Final Gravity: {this.props.data.style.fgMin} to {this.props.data.style.fgMax}</p>
          <p style={styles.detailsText}>Standard Reference Method: {this.props.data.style.srmMin} to {this.props.data.style.srmMax}</p>

          <h1 style={styles.secondaryHeaders}>Brewery Info</h1>
          <p style={styles.detailsText}>Brewery Name: {this.props.data.breweries[0].name}</p>
          <p style={styles.detailsText}>About: {this.props.data.breweries[0].description}</p>
          <p style={styles.detailsText}>Website: {this.props.data.breweries[0].website}</p>
          <p style={styles.detailsText}>Established: {this.props.data.breweries[0].established}</p>

          <div style={styles.stylesButton}><FlatButton label="Back to Styles" href={`/beerstyle?style=${this.props.data.style.id}`}/></div>
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
