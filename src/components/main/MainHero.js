import React from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import mainHeroUndraw from "../../images/mainHeroUnDraw.png";
import Fade from "react-reveal/Fade";

const MainHero = () => {
  return (
    <div className="MainHero">
      <div className="mainHeroLeftDiv">
        <Fade left cascade>
          <div id="eforEveryone">Apps made for everyone.</div>
          <div className="learnMore">
            <div>Learn More</div>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
        </Fade>
      </div>
      <div className="mainHeroRightDiv">
        <Fade>
          <img src={mainHeroUndraw} />
        </Fade>
      </div>
    </div>
  );
};

export default MainHero;
