import React from "react";
import odegaLogo from "../../images/OdegaLogo.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className="nav">
      <div className="mainNavLeftDiv">
        <img id="odegaLogo" src={odegaLogo} />
        <div id="odegaTitle">Odega</div>
        <div id="studiosTitle">Studios</div>
      </div>
      <div className="mainNavRightDiv">
        <Link className="mainNavIndy" to="/">
          Home
        </Link>
        <a className="mainNavIndy" href="/whatwedo">
          What We Do
        </a>
        {/* <div className="mainNavIndy">Our Apps</div> */}
        <a className="mainNavIndy">Meet The Team</a>
        <a className="mainNavIndy">Contact Us</a>
      </div>
    </div>
  );
}

export default MainNav;
