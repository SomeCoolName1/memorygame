import React from "react";

const CardRender = ({ cardList, onclick }) => {
  const cardRetrieve = require("./images/" + cardList + ".png");

  const pink = "from-softPink to-softPinkEnd";
  const purple = "from-softPurple to-softPurpleEnd";
  const purnk = "from-softPurnk to-softPurnkEnd";
  const green = "from-softGreen to-softGreenEnd";
  const blue = "from-softBlue to-softBlueEnd";

  const colorsArray = [pink, purple, purnk, green, blue];

  const randomiseColors = () => {
    let random = Math.floor(Math.random() * colorsArray.length);
    let colorSelect = colorsArray[random];
    return colorSelect;
  };

  const cardColor = randomiseColors();

  return (
    <div className="group hover:scale-105 hover:-translate-y-3 overflow-hidden duration-300 m-3 hover:shadow-test-shadow align-bottom">
      <div
        className={
          "justify-center shadow-custom rounded-xl bg-gradient-radial h-full " +
          `${cardColor}`
        }
      >
        <p className="text-center top-0 text-xs text-white -translate-y-full duration-300 group-hover:translate-y-full group-hover:scale-110">
          {cardList}
        </p>

        <div className="w-44 min-h-full">
          <img
            alt="UMA"
            src={cardRetrieve}
            onClick={onclick}
            className={cardList}
          />
        </div>
      </div>
    </div>
  );
};

export default CardRender;
