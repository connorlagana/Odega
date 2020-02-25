import React, { Component } from "react";
import "./App.css";

import MainHero from "./components/main/MainHero.js";
import MainNav from "./components/main/MainNav.js";
import WhatWeDo from "./components/main/WhatWeDo.js";
import MeetTheTeam from "./components/main/MeetTheTeam";
import OurApps from "./components/main/OurApps";
import ContactUs from "./components/main/ContactUs";

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
        <WhatWeDo />
        <OurApps />
        <MeetTheTeam />
        <ContactUs />
      </div>
    );
  }
}

export default App;
