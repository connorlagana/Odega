import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class OurApps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apps: [
        // {
        //   name: "Sound Flex",
        //   description:
        //     "Sound Flex is a revolutionary audio manipulation app used by soccer moms fuck me",
        //   picture: soundFlexPic,
        //   logo: soudFlexLogo
        // },
        // {
        //   name: "TradrX",
        //   description:
        //     "TradrX is a revolutionary financial manipulation app used by soccer moms fuck me",
        //   picture: tradrXPic,
        //   logo: tradrXLogo
        // }
      ]
    };
  }
  render() {
    return (
      <div className="OurApps">
        <div id="appsTitle">Our Apps</div>
        <div className="apps">
          {this.state.apps.map((app, key) => (
            <div className="app">
              <Fade>
                <img src={app.picture} id="appPic" />
              </Fade>
              <Fade bottom>
                <div id="appName">{app.name}</div>
                <div id="appDesc">{app.job}</div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default OurApps;
