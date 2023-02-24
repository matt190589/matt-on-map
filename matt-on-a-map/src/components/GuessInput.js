import React from "react";
import { useState } from "react";
import GuessList from "./GuessList";

export default function Guessinput() {
  const [guess, setGuess] = useState("");
  const [guessLists, setGuessLists] = useState([]);

  const MAX_GUESSES = 6;

  const userGuess = (event) => {
    console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    setGuess(value);
  };

  const handleGuessButtonClick = (e) => {
    let guessesAttempted = 0;
    if (guessLists.length < MAX_GUESSES) {
      e.preventDefault();
      if (!guess);
      const newGuess = {
        id: Date.now(),
        userGuess: guess,
      };
      setGuessLists([...guessLists, newGuess]);
      setGuess("");
      console.log(guessLists);
      console.log(guessLists.length);
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
        {guessLists.map((guessList) => (
          <GuessList key={guessList.id} guessList={guessList} />
        ))}
      </ul>
    </div>
  );
}
