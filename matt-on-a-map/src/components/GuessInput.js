import React from "react";
import { useState } from "react";
import GuessList from "./GuessList";
import ClueBox from "../components/ClueBox";

export default function Guessinput(props) {
  const [guess, setGuess] = useState("");

  const MAX_GUESSES = 6;

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
      setGuess("");
    } else {
      alert("You have reached the max number of guess. Try again tomorrow.");
    }
  };

  return (
    <div>
      <form onSubmit={handleGuessButtonClick}>
        <input
          placeholder="Enter your guess"
          type="text"
          onChange={userGuess}
          value={guess}
        ></input>
        <button>Guess</button>
      </form>
      <ul>
        {props.guessLists.map((guessList) => (
          <GuessList key={guessList.id} guessList={guessList} />
        ))}
      </ul>
    </div>
  );
}
