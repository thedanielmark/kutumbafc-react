import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import MainContent from "./components/Login/MainContent";

export default class CommunityGuidelines extends Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Community Guidelines | Elevate</title>
          </Helmet>
          {/* <MainContent></MainContent> */}
        </React.Fragment>
      </HelmetProvider>
    );
  }
}