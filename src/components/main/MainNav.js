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
      <div className="mainNavRightDiv"></div>
    </div>
  );
}

export default MainNav;
