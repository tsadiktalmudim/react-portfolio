import React from "react";
import HHG2G from "../assets/images/HHG2G.gif";

const NoMatch = () => {
  return (
    <div className="flexbox">
      <div className="noMatch">
        <h2>Well, this is embarassing...</h2>
        <h1>
          <span role="img" aria-label="Gif of BabelFish from HHG2G"></span>
          <img src={HHG2G} alt="Gif of BabelFish from HHG2G" />
        </h1>
        <p>404 Page Not Found</p>
      </div>
    </div>
  );
};

export default NoMatch;
