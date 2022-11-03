import React, { useEffect, useState } from "react";
import CardRender from "./card";
import GameHeader from "./header";

const nameList = [
  "Android 16",
  "Android 17",
  "Android 18",
  "Android 21",
  "Beerus",
  "Super Baby 2",
  "Bardock",
  "Black",
  "Broly",
  "Broly DBS",
  "Buu",
  "Cell",
  "Cooler",
  "Frieza",
  "Ginyu",
  "Gogeta SS4",
  "Gogeta SSGSS",
  "Gohan Adult",
  "Gohan Teen",
  "Goku Base",
  "Goku GT",
  "Goku SS",
  "Goku SSGSS",
  "Goku UI",
  "Gotenks",
  "Hit",
  "Jiren",
  "Kefla",
  "Kid Buu",
  "Krillin",
  "Lab 21",
  "Nappa",
  "Piccolo",
  "Roshi",
  "Tien",
  "Trunks",
  "Vegeta Base",
  "Vegeta SS",
  "Vegeta SSGSS",
  "Vegito SSGSS",
  "Videl",
  "Yamcha",
  "Zamasu Fused",
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
        className="bg-black opacity-95 text-white text-4xl w-full absolute hidden z-20 h-full"
        onClick={gameResult}
        id="overlay"
      >
        <div className="min-h-full h-full justify-center flex items-center text-center">
          {win}
        </div>
      </div>
      <div className="w-screen text-center">
        <GameHeader
          highscore={highscore}
          score={score}
          difficulty={difficulty}
        />
      </div>
      <div className="flex flex-wrap justify-center w-4/5 m-auto z-0">
        {cardList.map((s) => (
          <CardRender cardList={s} onclick={cardHandling} />
        ))}
      </div>
    </div>
  );
};

export default GameHandling;
