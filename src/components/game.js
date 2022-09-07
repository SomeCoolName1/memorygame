import React, { useEffect, useState } from "react";
import CardRender from "./card";
import GameHeader from "./header";

const nameList = [
  "Admire Vega",
  "Agnes Digital",
  "Agnes Tachyon",
  "Copano Rickey",
  "Curren Chan",
  "Daitaku Helios",
  "Daiwa Scarlet",
  "Eishin Flash",
  "El Condor Pasa",
  "Fine Motion",
  "Gold City",
  "Grass Wonder",
  "Happy Meek",
  "Hishi Akebono",
  "Kitasan Black",
  "Narita Brian",
  "Sirius Symboli",
  "Haru Urara",
  "Manhattan Cafe",
  "B95",
  "Matikane Tannhauser",
  "Hokko Tarumae",
  "Rice Shower",
  "Mayano Top Gun",
  "Mejiro Dober",
  "Mr. C.B.",
  "Mejiro Mcqueen",
  "Mihono Bourbon",
  "Oguri Cap",
  "Sakura Bakunshin O",
  "Satono Diamond",
  "Silence Suzuka",
  "Symboli Rudolf",
  "Tamamo Cross",
  "Tokai Teio",
  "Tosho Sweep",
  "Twin Turbo",
  "Yamanin Zephyr",
];

const GameHandling = () => {
  //Initialising
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [cardList, setCardList] = useState([]);
  const [cardClicked, addCard] = useState([]);
  const [difficulty, addDifficulty] = useState(1);

  let win;

  if (difficulty === 1) {
    win = "You suck. Difficulty resetted, you nincompoop";
  } else {
    win = "You cleared. Difficulty raised.";
  }

  useEffect(() => {
    setCardList([]);
    let randomList = [];
    for (let i = 0; i <= difficulty; i++) {
      let random = Math.floor(Math.random() * nameList.length);
      let selectedRandom = nameList[random];

      if (randomList.includes(selectedRandom)) {
        i--;
        continue;
      }
      randomList.push(selectedRandom);
    }
    setCardList(randomList);
  }, [difficulty]);

  const cardShuffling = () => {
    const shuffledCards = [...cardList].sort(() => Math.random() - 0.5);
    setCardList(shuffledCards);
  };

  const cardHandling = (e) => {
    let currentCardName = e.target.className;

    const clickedCards = [...cardClicked];

    if (clickedCards.find((r) => r === currentCardName)) {
      addDifficulty(1);
      gameResult();
    } else {
      setScore(score + 1);
      addCard([...cardClicked, currentCardName]);
      if (score === difficulty && score !== 0) {
        addDifficulty(difficulty + 1);
        gameResult();
      }
      if (highscore === score) {
        setHighscore(highscore + 1);
      }
      cardShuffling();
    }
  };

  const gameResult = () => {
    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("hidden");
    gameReset();
  };

  const gameReset = () => {
    setScore(0);
    addCard([]);
    cardShuffling();
  };

  return (
    <div className="h-full w-full">
      <div
        className="bg-black z-100 opacity-95 text-white text-4xl h-full w-full absolute hidden"
        onClick={gameResult}
        id="overlay"
      >
        <div className="h-full text-center translate-y-1/2">{win}</div>
      </div>
      <div className="w-screen text-center">
        <GameHeader
          highscore={highscore}
          score={score}
          difficulty={difficulty}
        />
      </div>
      <div className="flex flex-wrap justify-center w-4/5 m-auto">
        {cardList.map((s) => (
          <CardRender cardList={s} onclick={cardHandling} />
        ))}
      </div>
    </div>
  );
};

export default GameHandling;
