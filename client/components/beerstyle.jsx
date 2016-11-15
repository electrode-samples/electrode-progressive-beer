import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {GridList} from "material-ui/GridList";
import Header from "./header";
import BeerCard from "./beercard";
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
    return (
      <MuiThemeProvider>
        <div>
          <Header />

          <h1 style={styles.header}> This Beer's Style </h1>
          <p style={styles.subText}> Most traditional interpretations of English-style India pale ales are characterized by medium-high hop bitterness with a medium to medium-high alcohol content. Hops from a variety of origins may be used to contribute to a high hopping rate. Earthy and herbal English-variety hop character is the perceived end, but may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer, sometimes with subtle and balanced character of sulfur compounds. This pale gold to deep copper-colored ale has a medium to high, flowery hop aroma and may have a medium to strong hop flavor (in addition to the hop bitterness). English-style India pale ales possess medium maltiness and body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill haze is allowable at cold temperatures. Hops of other origins may be used for bitterness or approximating traditional English character. </p>

          <h1 style={styles.availableHeader}> Available Beers </h1>
          <div style={styles.root}>
            <GridList cellHeight={180} style={styles.gridList}>
              <BeerCard />
            </GridList>
          </div>

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default BeerStyle;
