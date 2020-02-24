import React from "react";
import odegaLogo from "../../images/OdegaLogo.png";

function MainNav() {
  return (
    <div className="nav">
      <div className="mainNavLeftDiv">
        <img id="odegaLogo" src={odegaLogo} />
        <div id="odegaTitle">Odega</div>
        <div id="studiosTitle">Studios</div>
      </div>
      <div className="mainNavRightDiv">
        <div className="mainNavIndy">Home</div>
        <div className="mainNavIndy">What We Do</div>
        <div className="mainNavIndy">Our Work</div>
        <div className="mainNavIndy">About Us</div>
        <div className="mainNavIndy">Contact Us</div>
      </div>
    </div>
  );
}

export default MainNav;
