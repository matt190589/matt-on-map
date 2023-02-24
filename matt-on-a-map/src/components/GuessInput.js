import React from "react";
import { useState } from "react";
import GuessList from "./GuessList";
import ClueBox from "../components/ClueBox";
import capitalData from "lib/data";

export default function Guessinput(props) {
  const [guess, setGuess] = useState("");
  // const [gamePlay, setGamePlay] = useState("playing");

  const MAX_GUESSES = 5;

  const userGuess = (event) => {
    console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    setGuess(value);
  };

  const handleGuessButtonClick = (e) => {
    if (props.guessLists.length < MAX_GUESSES) {
      e.preventDefault();
      if (!guess);
      const newGuess = {
        id: Date.now(),
        userGuess: guess,
      };
      props.onGuessListChange([...props.guessLists, newGuess]);
      checkIfCorrect();
      setGuess("");
    } else {
      alert("You have reached the max number of guess. Try again tomorrow.");
    }
  };
  const mattLocation = capitalData[0].capital.toLowerCase();

  const checkIfCorrect = () => {
    if (guess === mattLocation) {
      alert("Well done. You found Matt today!");
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
        ></input>
        <br></br>
        <button className="guess-button">Guess</button>
      </form>
      <ul>
        {props.guessLists.map((guessList) => (
          <GuessList key={guessList.id} guessList={guessList} />
        ))}
      </ul>
    </div>
  );
}
