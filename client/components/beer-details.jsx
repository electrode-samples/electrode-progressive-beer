import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./header";
import Footer from "./footer";

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
  }
};

export class BeerDetails extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />

          <h1 style={styles.header}> Features </h1>

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default BeerDetails;
