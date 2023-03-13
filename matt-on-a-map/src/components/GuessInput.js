import React from "react";
import { useState, useEffect } from "react";
import GuessList from "./GuessList";
import capitalData from "lib/data";
import { getDayKey, getDayOfTheYear } from "./DayYear";

export default function Guessinput(props) {
  const [guess, setGuess] = useState("");
  const [gameResult, setGameResult] = useState("playing");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const MAX_GUESSES = 5;

  const dayOfTheYear = getDayOfTheYear();
  const dayKey = getDayKey();

  const userGuess = (event) => {
    const value = event.target.value.toLowerCase().trim();
    const regex = /^[a-zA-Z\s]+$/; //only allow letters
    if (value.length === 0) {
      setSubmitEnabled(false);
    } else if (!regex.test(value)) {
      setSubmitEnabled(false);
      alert("Please only enter letters");
    } else {
      setGuess(value);
      console.log("type", value);
      setSubmitEnabled(true);
    }
  };

  const handleGuessButtonClick = (e) => {
    e.preventDefault();
    if (!guess);
    const newGuess = {
      id: Date.now(),
      userGuess: guess,
    };
    props.onGuessListChange([...props.guessLists, newGuess]);
    checkGameResult();
    setGuess("");
  };
  const mattLocation = capitalData[1].capital.toLowerCase();
  console.log(mattLocation);

  const checkIfCorrect = () => {
    if (guess === mattLocation) {
      console.log("win");
      return true;
    }
  };

  const checkIfIncorrect = () => {
    return !checkIfCorrect() && props.guessLists.length === MAX_GUESSES;
  };

  const checkGameResult = () => {
    if (checkIfCorrect() && gameResult !== "won") {
      alert(`You found Matt`);
      setGameResult("won");
    } else if (checkIfIncorrect() && gameResult !== "lost") {
      alert(`Bad luck. You haven't found Matt today`);
      setGameResult("lost");
    }
  };

  return (
    <div>
      <form className="button-container" onSubmit={handleGuessButtonClick}>
        <input
          className="text-input-box"
          placeholder="Enter your guess"
          type="text"
          onChange={userGuess}
          value={guess}
          disabled={gameResult !== "playing"} // disable input field if game is won or lost
        ></input>
        <br></br>
        <button
          className="guess-button"
          disabled={gameResult !== "playing" || !submitEnabled}
        >
          Guess
        </button>
      </form>
      <ul>
        {props.guessLists.map((guessList) => (
          <GuessList key={guessList.id} guessList={guessList} />
        ))}
      </ul>
    </div>
  );
}
