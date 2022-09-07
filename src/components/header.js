import React from "react";

const GameHeader = ({ highscore, score, difficulty }) => {
  const logo = require("./images/logo/logo.png");
  return (
    <div className="w-full">
      <img src={logo} className="w-auto h-40 h-max-40 m-auto"></img>
      <div className="w-full flex justify-center">
        <div className="flex flex-row flex-wrap justify-center align-center w-1/2 p-5 m-auto">
          <span className="text-grass p-1 w-header-count">Score: {score}</span>
          <span className="text-sun p-1 w-header-count">
            Highscore: {highscore}
          </span>
          <span className="text-blood p-1 w-header-count">
            Difficulty: {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
