import { useState } from "react";

export default function Guessinput() {
  const [guess, setGuess] = useState("");

  const userGuess = (event) => {
    console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    setGuess(value);
  };

  const handleGuessButtonClick = (e) => {
    e.preventDefault();
    addGuess(guess);
    setGuess("");
  };

  return (
    <div>
      <input
        placeholder="Enter your guess"
        type="text"
        onChange={userGuess}
        value={guess}
      ></input>
      <button>Guess</button>
    </div>
  );
}
