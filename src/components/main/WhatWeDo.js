import React from "react";
import mobileDev from "../../images/mobileDev.png";
import webDev from "../../images/webDev.png";
import Fade from "react-reveal/Fade";

function WhatWeDo() {
  return (
    <div className="WhatWeDo">
      <div className="wwdIndy">
        <div>
          <img src={mobileDev} />
        </div>
        <Fade left>
          <div id="devTitle">Mobile App Development</div>
          <div id="devDesc">
            Our team of programmers and designers are working together to
            deliver you iOS and Android apps that can be used by everyone for
            every day needs.
          </div>
        </Fade>
      </div>
      <div className="wwdIndy">
        <div>
          <img src={webDev} />
        </div>
        <Fade right>
          <div id="devTitle">Web Development</div>
          <div id="devDesc">
            Along with mobile apps, Odega Studios plans on creating web based
            versions of your favorite mobile apps, so you can enjoy Sound Flex,
            TradrX, or any of our other apps anywhere you go.
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default WhatWeDo;
