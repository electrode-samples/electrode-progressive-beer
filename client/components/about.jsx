import React, {PropTypes} from "react";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./header";
import Footer from "./footer";

class AboutWrapper extends React.Component {
  render() {
    return (
      <About data={this.props.data}/>
    );
  }
}

AboutWrapper.propTypes = {
  data: PropTypes.string
};

/* eslint-disable max-len */
export class About extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />

          <h1>Hello About</h1>

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

About.propTypes = {
  data: PropTypes.string
};

const mapStateToProps = (state) => ({
  data: state && state.data
});

export default connect(
  mapStateToProps
)(AboutWrapper);
