import React, {PropTypes} from "react";
import {connect} from "react-redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import {List, ListItem} from "material-ui/List";
import ShowChart from "material-ui/svg-icons/editor/show-chart";
import Opacity from "material-ui/svg-icons/action/opacity";
import Done from "material-ui/svg-icons/av/playlist-add-check";
import GroupWork from "material-ui/svg-icons/action/group-work";
import LocalBar from "material-ui/svg-icons/maps/local-bar";
import Info from "material-ui/svg-icons/action/info";
import Place from "material-ui/svg-icons/maps/place";
import Cake from "material-ui/svg-icons/social/cake";
import Divider from "material-ui/Divider";

import Header from "./header";
import Footer from "./footer";

// eslint-disable-next-line
let styles = {
  header: {
    fontSize: "40px",
    paddingTop: "360px",
    textAlign: "center"
  },
  secondaryHeaders: {
    fontSize: "30px",
    paddingBottom: "2%",
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
  list: {
    margin: "0 auto",
    width: "95%"
  },
  stylesButton: {
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    paddingTop: "3%",
    paddingBottom: "3%"
  }
};

/* eslint-disable max-len */
export class BeerDetails extends React.Component {
  render() {
    styles.list.width = this.props.phone ? "95%" : "60%";

    return (
      <MuiThemeProvider>
        <div>
          <Header
            image="beerdetails"
            title={this.props.data.name}
            subtitle={this.props.data.style.name}
            phone={this.props.phone}
          />

          <h1 style={styles.header}>Features</h1>
          <p style={styles.subText}>{this.props.data.description}</p>

          <h1 style={styles.secondaryHeaders}>Details</h1>
          <List style={styles.list}>
            <ListItem
              leftAvatar={<ShowChart style={{fontSize: "32px"}}/>}
              primaryText="International Bitterness Units scale"
              secondaryText={this.props.data.ibu}
              disabled={true}
            />
            <Divider />
            <ListItem
              leftAvatar={<Opacity />}
              primaryText="Alcohol by Volume"
              secondaryText={`${this.props.data.style.abvMin} to ${this.props.data.style.abvMax}`}
              disabled={true}
            />
            <Divider />
            <ListItem
              leftAvatar={<Done />}
              primaryText="Final Gravity"
              secondaryText={`${this.props.data.style.fgMin} to ${this.props.data.style.fgMax}`}
              disabled={true}
            />
            <Divider />
            <ListItem
              leftAvatar={<GroupWork />}
              primaryText="Standard Reference Method"
              secondaryText={`${this.props.data.style.srmMin} to ${this.props.data.style.srmMax}`}
              disabled={true}
            />
          </List>

          <h1 style={styles.secondaryHeaders}>Brewery Info</h1>
          <List style={styles.list} disabled="true">
            <ListItem
              leftAvatar={<LocalBar />}
              primaryText="Brewery Name"
              secondaryText={this.props.data.breweries[0].name}
              disabled={true}
            />
            <Divider />
            <ListItem
              leftAvatar={<Info />}
              primaryText="About"
              secondaryText={this.props.data.breweries[0].description}
              disabled={true}
            />
            <Divider />
            <ListItem
              leftAvatar={<Place />}
              primaryText="Website"
              secondaryText={<a href={this.props.data.breweries[0].website}>{this.props.data.breweries[0].website}</a>}
              disabled={true}
            />
            <Divider />
            <ListItem
              leftAvatar={<Cake />}
              primaryText="Established"
              secondaryText={this.props.data.breweries[0].established}
              disabled={true}
            />
          </List>

          <div style={styles.stylesButton}><FlatButton label="Back to Styles" href={`/beerstyle?style=${this.props.data.style.id}`}/></div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

BeerDetails.propTypes = {
  data: PropTypes.object,
  phone: PropTypes.bool
};

const mapStateToProps = (state) => ({
  data: state.data,
  phone: state.phone
});

export default connect(
  mapStateToProps
)(BeerDetails);
