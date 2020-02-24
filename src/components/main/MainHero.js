import React from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import mainHeroUndraw from "../../images/mainHeroUndraw.png";

const MainHero = () => {
  return (
    <div className="MainHero">
      <div className="mainHeroLeftDiv">
        <div id="eforEveryone">Apps made for everyone.</div>
        <div className="learnMore">
          <div>Learn More</div>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
      </div>
      <div className="mainHeroRightDiv">
        <img src={mainHeroUndraw} />
      </div>
    </div>
  );
};

export default MainHero;
