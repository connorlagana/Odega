import React, { Component } from "react";
import "./App.css";

import MainHero from "./components/main/MainHero.js";
import MainNav from "./components/main/MainNav.js";

import blueishBGBottom from "./images/BlueishBGBottom.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <img id="blueishBGBottom" src={blueishBGBottom} />
        <MainNav />
        <MainHero />
      </div>
    );
  }
}

export default App;
