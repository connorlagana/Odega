import React from "react";
import mobileDev from "../../images/mobileDev.png";
import webDev from "../../images/webDev.png";

function WhatWeDo() {
  return (
    <div className="WhatWeDo">
      <div className="wwdIndy">
        <div>
          <img src={mobileDev} />
        </div>
        <div id="devTitle">Mobile App Development</div>
        <div id="devDesc">
          Our team of programmers and designers are working together to deliver
          you iOS and Android apps that can be used by everyone for every day
          needs.
        </div>
      </div>
      <div className="wwdIndy">
        <div>
          <img src={webDev} />
        </div>
        <div id="devTitle">Web Development</div>
        <div id="devDesc">
          Along with mobile apps, Odega Studios plans on creating web based
          versions of your favorite mobile apps, so you can enjoy Sound Flex,
          TradrX, or any of our other apps anywhere you go.
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
