import React, { Component } from "react";
import Toolbar from "./components/Toolbar/ToolbarContainer";
import Body from "./components/Body/BodyContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <Body />
      </React.Fragment>
    );
  }
}

export default App;
